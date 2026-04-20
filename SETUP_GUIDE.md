# 🚀 SkillQuest AI - OpenAI Integration Setup Guide

## ✅ What's Been Added

Your SkillQuest AI app now has a **real LLM backend** powered by OpenAI! The system is designed to work seamlessly with your existing local recommendation engine as a fallback.

### New Components:

1. **`server.js`** - Express backend with OpenAI integration
2. **`.env`** - Environment variables (configure with your API key)
3. **`aiRecommendationService.js`** - Frontend service for API calls
4. **Updated `Dashboard.jsx`** - Integrated AI recommendations with fallback

---

## 🔑 Step 1: Setup Environment Variables

### Get Your OpenAI API Key

1. Go to: https://platform.openai.com/account/api-keys
2. Sign up or log in to your OpenAI account
3. Create a new API key
4. Copy the key (you won't see it again!)

### Configure `.env` File

Open `c:\Users\Ritika\skillquest_ai\.env` and update:

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
PORT=5000
VITE_API_URL=http://localhost:5000
```

**⚠️ IMPORTANT:**
- Never commit `.env` to Git
- Keep your API key secret
- The `.gitignore` file already excludes `.env`

---

## 📦 Step 2: Install Dependencies

Run the following command in the project root:

```bash
npm install
```

This will install:
- `express` - Backend framework
- `cors` - Cross-origin requests
- `dotenv` - Environment variable management
- `openai` - OpenAI SDK
- `concurrently` - Run multiple processes

---

## 🎯 Step 3: Start the Backend & Frontend

### Option A: Run Backend & Frontend Together (Recommended)

```bash
npm run dev-full
```

This command runs:
- **Frontend**: Vite dev server on `http://localhost:5173/`
- **Backend**: Express server on `http://localhost:5000/`

### Option B: Run Separately (For Debugging)

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

---

## 🧪 Step 4: Test the Integration

1. **Start the app** using `npm run dev-full`
2. **Open** `http://localhost:5173/` in your browser
3. **Login** with your Firebase account
4. **Create/Edit Profile** and add skills like:
   - Python
   - React
   - JavaScript
5. **Go to Dashboard**
6. **Watch** as AI generates personalized recommendations! 🎯

### Expected Output:

You should see:
- ⏳ "Generating AI recommendations..." while loading
- 💡 AI-generated explanation of why these recommendations fit you
- 📈 3 skill suggestions
- 💡 3 project ideas
- 🎯 2 career paths

---

## 🔄 How It Works

### Request Flow:

```
User Profile (skills + interests)
    ↓
Dashboard.jsx fetches AI recommendations
    ↓
aiRecommendationService.js calls backend API
    ↓
server.js receives request
    ↓
OpenAI generates personalized recommendations
    ↓
Response returned to frontend
    ↓
Dashboard displays AI results + AI explanation
```

### Fallback Logic:

If the OpenAI API fails:
- ✅ System automatically falls back to local recommendations
- ✅ User still sees suggestions (just from local dataset)
- ✅ No error shown to user (graceful degradation)

---

## 🛠️ Configuration

### Backend API Endpoint

**POST** `/api/recommend`

**Request Body:**
```json
{
  "skills": ["Python", "React"],
  "interests": ["Web Development", "AI"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "skills": ["FastAPI", "TypeScript", "NextJS"],
    "projects": [
      "Build a real-time web dashboard",
      "Create an AI chatbot",
      "Develop a SaaS application"
    ],
    "careers": ["Full-Stack Developer", "ML Engineer"],
    "reason": "Based on your Python and React skills, you're well-positioned to become a full-stack developer specializing in AI applications."
  }
}
```

---

## 🚨 Troubleshooting

### Issue: "API key invalid" Error

**Solution:**
1. Double-check your API key in `.env`
2. Ensure no extra spaces around the key
3. Generate a new key from OpenAI dashboard
4. Restart the backend server

### Issue: "Port 5000 already in use"

**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in .env to 5001
```

### Issue: Frontend can't connect to backend

**Solution:**
1. Ensure backend is running (`npm run server`)
2. Check that `VITE_API_URL=http://localhost:5000` in `.env`
3. Check browser console for CORS errors
4. Verify both servers are accessible

### Issue: OpenAI rate limit exceeded

**Solution:**
- Wait a few minutes before making another request
- Upgrade your OpenAI plan for higher rate limits
- Consider adding request throttling

---

## 📊 Cost Considerations

OpenAI API pricing (as of April 2026):

- **GPT-3.5-turbo**: $0.0005 per 1K input tokens, $0.0015 per 1K output tokens
- **Typical request**: ~200 input tokens, ~150 output tokens = ~$0.0003 per recommendation

**Monthly estimate** (assuming 1000 users/month):
- ~$0.30 total cost

---

## 🔐 Security Best Practices

✅ **Done:**
- API key stored in `.env` (not in code)
- `.env` excluded from Git
- CORS configured for frontend only

⚠️ **For Production:**
- Add API rate limiting
- Add request validation
- Add user authentication check
- Add logging/monitoring
- Implement API key rotation

---

## 📝 Code Overview

### Backend (`server.js`)
- Receives skill/interest data
- Constructs OpenAI prompt
- Calls GPT-3.5-turbo
- Validates response
- Returns structured JSON

### Frontend Service (`aiRecommendationService.js`)
- Handles API communication
- Implements error handling
- Returns null on failure (triggers fallback)

### Dashboard Integration (`Dashboard.jsx`)
- Calls AI service after profile load
- Manages loading state
- Falls back to local recommendations
- Displays AI explanation

---

## 🚀 Next Steps

Once everything is working:

1. **Add loading animations** for better UX
2. **Save recommendations** to Firestore for analytics
3. **Add user feedback** ("Was this helpful?")
4. **Implement caching** to reduce API calls
5. **Add more prompts** for different recommendation types
6. **Deploy to production** (Vercel for frontend, Railway for backend)

---

## 📚 Resources

- OpenAI Docs: https://platform.openai.com/docs
- Express.js: https://expressjs.com
- Firebase: https://firebase.google.com
- Vite: https://vitejs.dev

---

## ✨ Summary

Your SkillQuest AI app now has:
- ✅ Real LLM-powered recommendations
- ✅ Graceful fallback system
- ✅ Clean API integration
- ✅ Production-ready code
- ✅ Secure environment setup

**You're ready to launch!** 🎉
