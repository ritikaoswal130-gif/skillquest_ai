// Vercel Serverless Function - OpenAI Proxy
// This bypasses CORS by calling OpenAI from the server side

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { skills, interests } = req.body;

    // Validate input
    if (!skills || !interests) {
      return res.status(400).json({ error: 'Missing skills or interests' });
    }

    // Get API key from environment
    const apiKey = process.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    // Build prompt
    const prompt = `You are a career and skills advisor for a developer learning platform called SkillQuest AI.

User's Current Skills: ${skills.length > 0 ? skills.join(", ") : "None specified"}
User's Interests: ${interests.length > 0 ? interests.join(", ") : "Not specified"}

Based on these skills and interests, provide 3-4 specific, actionable learning recommendations. For each recommendation include:
1. Skill/Topic to learn
2. Why it's relevant
3. Suggested learning resources or approach

Format your response as a clear, bulleted list. Be specific and practical.`;

    // Call OpenAI API from server (no CORS issues)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful career advisor for developers. Provide practical, specific recommendations.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({
        error: error.error?.message || 'OpenAI API error',
      });
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return res.status(500).json({ error: 'Unexpected response from OpenAI' });
    }

    const recommendations = data.choices[0].message.content;

    return res.status(200).json({
      success: true,
      data: recommendations,
    });
  } catch (error) {
    console.error('OpenAI Proxy Error:', error);
    return res.status(500).json({
      error: error.message || 'Internal server error',
    });
  }
}
