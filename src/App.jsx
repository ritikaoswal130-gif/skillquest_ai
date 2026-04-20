
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [hasProfile, setHasProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  console.log("hasProfile:", hasProfile);

  // 🌙 Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // 🔐 Track Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 📊 Check if profile exists
  useEffect(() => {
    if (user) {
      const checkProfile = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }
      };

      checkProfile();
    }
  }, [user]);

  // ⏳ Loading screen
  if (loading) {
    return (
      <div className="container">
        <div className="auth-box">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading your journey...</p>
          </div>
        </div>
      </div>
    );
  }

  // 🔐 Not logged in → show Home or Auth UI
  if (!user) {
    return (
      <div className="container">
        {activeTab === "home" ? (
          <Home 
            onNavigateToLogin={() => setActiveTab("login")}
            onNavigateToRegister={() => setActiveTab("register")}
          />
        ) : (
          <div className="auth-box">
            {/* Tabs */}
            <div className="tabs">
              <button
                className={activeTab === "login" ? "active" : ""}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>

              <button
                className={activeTab === "register" ? "active" : ""}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>

              <button
                className={activeTab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}
              >
                Home
              </button>
            </div>

            {/* Content */}
            {activeTab === "login" ? (
              <Login setUser={setUser} />
            ) : (
              <Register />
            )}
          </div>
        )}
      </div>
    );
  }

  // 🧩 First-time user or editing profile → profile setup
  if (!hasProfile) {
    return <Profile user={user} onProfileCreated={() => setHasProfile(true)} />;
  }

  // 🎉 Main Dashboard
  return (
    <Dashboard
      user={user}
      onEditProfile={() => setHasProfile(false)}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
export default App;