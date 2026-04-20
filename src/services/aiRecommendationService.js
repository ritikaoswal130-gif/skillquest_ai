// 🤖 AI Recommendation Service
// Fetches recommendations from the backend OpenAI API
// Includes caching to prevent duplicate requests

const API_URL = "http://localhost:5000";
const cache = new Map();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Generate cache key from skills and interests
function getCacheKey(skills, interests) {
  const key = `${JSON.stringify(skills?.sort())}:${JSON.stringify(interests?.sort())}`;
  return key;
}

// Check if cache is still valid
function isCacheValid(timestamp) {
  return Date.now() - timestamp < CACHE_DURATION;
}

export async function getAIRecommendations(skills = [], interests = []) {
  try {
    const cacheKey = getCacheKey(skills, interests);

    // Check if we have cached data
    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      if (isCacheValid(cached.timestamp)) {
        console.log("✅ Using cached recommendations");
        return cached.data;
      } else {
        cache.delete(cacheKey);
      }
    }

    const response = await fetch(`${API_URL}/api/recommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills: skills || [],
        interests: interests || [],
      }),
    });

    // Handle network errors
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("OpenAI rate limited - please wait a moment and try again");
      }
      throw new Error(`API returned ${response.status}`);
    }

    const result = await response.json();

    // Handle API errors
    if (!result.success || !result.data) {
      throw new Error(result.error || "Invalid response from server");
    }

    const recommendationData = {
      skills: result.data.skills || [],
      projects: result.data.projects || [],
      careers: result.data.careers || [],
      reason: result.data.reason || "",
      source: "ai",
    };

    // Cache the result
    cache.set(cacheKey, {
      data: recommendationData,
      timestamp: Date.now(),
    });

    console.log("✅ AI recommendations fetched and cached");
    return recommendationData;
  } catch (error) {
    console.error("❌ AI Recommendation Error:", error.message);
    
    // Return null on error - Dashboard will use fallback
    return null;
  }
}

export default {
  getAIRecommendations,
};
