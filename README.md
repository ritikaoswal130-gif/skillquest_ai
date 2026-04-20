# SkillQuest AI

A personalized skill development platform that uses AI to recommend learning paths based on your interests and current skills.

## Features

- 🔐 **Firebase Authentication** - Secure user registration and login
- 🎯 **AI-Powered Recommendations** - Get personalized skill recommendations using OpenAI
- 📊 **Dashboard** - Track your progress and learning goals
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful glass-morphism design with smooth animations

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js/Express (optional)
- **Database:** Firebase Firestore
- **Auth:** Firebase Authentication
- **AI:** OpenAI GPT API
- **Styling:** CSS3 with animations

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ritikaoswal130-gif/skillquest_ai.git
cd skillquest_ai

Install dependencies:
npm install

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENAI_API_KEY=your_openai_key
**For the Pull Request:**

1. Click the **"Compare & pull request"** button
2. Add a title like: `"Initial commit: Setup project with Firebase auth and dashboard"`
3. Add description (optional but good practice):
   ```
   - Set up authentication with Firebase
   - Created dashboard with skill recommendations
   - Added responsive design for mobile/tablet
   ```
4. Click **"Create pull request"**
5. Then click **"Merge pull request"** → **"Confirm merge"**
6. Delete the branch (optional)

---

**For the README.md file**, create it in your project root. Here's a template:

```markdown
# SkillQuest AI

A personalized skill development platform that uses AI to recommend learning paths based on your interests and current skills.

## Features

- 🔐 **Firebase Authentication** - Secure user registration and login
- 🎯 **AI-Powered Recommendations** - Get personalized skill recommendations using OpenAI
- 📊 **Dashboard** - Track your progress and learning goals
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful glass-morphism design with smooth animations

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js/Express (optional)
- **Database:** Firebase Firestore
- **Auth:** Firebase Authentication
- **AI:** OpenAI GPT API
- **Styling:** CSS3 with animations

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ritikaoswal130-gif/skillquest_ai.git
cd skillquest_ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENAI_API_KEY=your_openai_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open http://localhost:5175 in your browser

## Project Structure

```
skillquest_ai/
├── src/
│   ├── pages/           # Page components (Dashboard, Login, Profile, etc)
│   ├── services/        # Firebase & AI services
│   ├── data/            # Static data (skills, interests)
│   ├── App.jsx          # Main app component
│   ├── firebase.js      # Firebase configuration
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json
└── vite.config.js
```

## Usage

1. **Sign up** with your email
2. **Create a profile** with your current skills and interests
3. **View recommendations** personalized by AI
4. **Track progress** on the dashboard

## Environment Variables

All sensitive data should be stored in .env:
- Firebase credentials
- OpenAI API key
- Any other sensitive configuration

**Never commit the .env file to git!**

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Select your GitHub repository
5. Add environment variables
6. Click **"Deploy"**

Your app will be live at `https://skillquest-ai-seven.vercel.app`

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - see LICENSE file for details

## Author

Created by [Ritika Oswal](https://github.com/ritikaoswal130-gif)
```

---

**To add this file:**

1. In VS Code, right-click in the file explorer (root of project)
2. Select **"New File"**
3. Name it `README.md`
4. Paste the content above
5. Customize with your info
6. Save and commit:
```powershell
git add README.md
git commit -m "Add README"
git push
```

Then deploy to Vercel!