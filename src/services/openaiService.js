// 🤖 OpenAI Service - Direct Frontend Integration
// Calls OpenAI API directly from the browser using API key from environment variables

const cache = new Map();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

function getCacheKey(skills, interests) {
  const key = `${JSON.stringify(skills?.sort())}:${JSON.stringify(interests?.sort())}`;
  return key;
}

function isCacheValid(timestamp) {
  return Date.now() - timestamp < CACHE_DURATION;
}

export async function getAIRecommendations(skills = [], interests = []) {
  try {
    const cacheKey = getCacheKey(skills, interests);

    // Check cache first
    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      if (isCacheValid(cached.timestamp)) {
        console.log("✅ Using cached recommendations");
        return cached.data;
      } else {
        cache.delete(cacheKey);
      }
    }

    // Call Vercel serverless function (bypasses CORS)
    const response = await fetch("/api/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills: skills || [],
        interests: interests || [],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `API returned ${response.status}`);
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error || "Invalid response from server");
    }

    const recommendations = data.data;

    // Cache the results
    cache.set(cacheKey, {
      data: recommendations,
      timestamp: Date.now(),
    });

    return recommendations;
  } catch (error) {
    console.error("❌ AI Recommendation Error:", error.message);
    throw error;
  }
}
