import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Profile({ user, onProfileCreated }) {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch existing data (PRE-FILL)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setSkills(data.skills ? data.skills.join(", ") : "");
          setInterests(data.interests ? data.interests.join(", ") : "");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile");
      }

      setFetching(false);
    };

    fetchProfile();
  }, [user]);

  // 🔥 Save profile
  const handleSave = async (e) => {
    e.preventDefault();
    setError("");

    if (!skills.trim() || !interests.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        skills: skills.split(",").map((s) => s.trim()).filter(s => s),
        interests: interests.split(",").map((i) => i.trim()).filter(i => i),
        streak: 1,
        lastVisitDate: today,
        createdAt: today
      });

      onProfileCreated();
    } catch (error) {
      console.error(error);
      setError("Error saving profile. Please try again.");
    }

    setLoading(false);
  };

  // ⏳ Loading state while fetching existing data
  if (fetching) {
    return (
      <div className="auth-box">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-box">
      <form onSubmit={handleSave}>
        <h2>Build Your Profile</h2>

        <div style={{ fontSize: "13px", opacity: 0.8, marginBottom: "20px", textAlign: "center" }}>
          Tell us about your skills and interests (comma-separated)
        </div>

        <input
          type="text"
          placeholder="e.g. Python, React, JavaScript"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          disabled={loading}
        />

        <input
          type="text"
          placeholder="e.g. AI, Web Development, Startups"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          disabled={loading}
        />

        {error && (
          <div style={{
            color: "#ff6b6b",
            fontSize: "13px",
            padding: "10px 12px",
            background: "rgba(255, 107, 107, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(255, 107, 107, 0.3)",
            animation: "fadeIn 0.3s ease-out"
          }}>
            {error}
          </div>
        )}

        <button disabled={loading} type="submit">
          {loading ? "Saving Profile..." : "Save & Continue"}
        </button>
      </form>
    </div>
  );
}