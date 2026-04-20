
import { getRecommendations } from "../services/recommendationService";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { skillsData } from "../data/skillsData";

export default function Dashboard({ user, onEditProfile, darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profileData, setProfileData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recommendations, setRecommendations] = useState(null);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [proficiencyLevels, setProficiencyLevels] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        
        // � Check if skills changed, if so regenerate recommendations
        const skillsChanged = JSON.stringify(profileData?.skills) !== JSON.stringify(data.skills);
        const interestsChanged = JSON.stringify(profileData?.interests) !== JSON.stringify(data.interests);
        
        // 🔥 Update streak logic
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        const lastVisitDate = data.lastVisitDate || today;
        let streak = data.streak || 1;
        
        // Calculate days difference
        const lastVisit = new Date(lastVisitDate);
        const currentDate = new Date(today);
        const daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        // Update streak based on visit pattern
        if (daysDifference === 0) {
          // Same day, no change
        } else if (daysDifference === 1) {
          // Consecutive day, increment streak
          streak += 1;
        } else if (daysDifference > 1) {
          // Streak broken, reset to 1
          streak = 1;
        }
        
        // Update lastVisitDate
        await updateDoc(docRef, {
          streak: streak,
          lastVisitDate: today
        });
        
        // Update local state with new streak
        const updatedData = { ...data, streak, lastVisitDate: today };
        setProfileData(updatedData);
        console.log("📊 Profile data with streak:", updatedData);

        // 🔄 Regenerate recommendations if skills or interests changed
        if (skillsChanged || interestsChanged) {
          console.log("✨ Skills/Interests changed! Regenerating recommendations...");
          const recs = getRecommendations(updatedData.skills || []);
          setRecommendations(recs);
          console.log("✅ New recommendations generated:", recs);
        } else {
          // 🔥 Generate local recommendations
          const recs = getRecommendations(updatedData.skills || []);
          console.log("✅ Recommendations generated:", recs);
          setRecommendations(recs);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-secondary)", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? "250px" : "70px",
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        padding: "20px",
        transition: "width 0.3s ease",
        overflowY: "auto",
        height: "100vh",
        backdropFilter: "blur(10px)"
      }}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--accent)",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "20px",
            width: "100%",
            textAlign: "center",
            padding: "10px 0"
          }}
        >
          ☰
        </button>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={() => setActiveTab("dashboard")}
            style={{
              width: "100%",
              padding: "12px",
              background: activeTab === "dashboard" ? "linear-gradient(135deg, var(--accent-light), var(--accent))" : "rgba(200, 180, 160, 0.1)",
              border: activeTab === "dashboard" ? "1px solid var(--accent-light)" : "1px solid var(--card-border)",
              borderRadius: "10px",
              color: activeTab === "dashboard" ? "white" : "var(--accent)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: sidebarOpen ? "left" : "center",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            {sidebarOpen ? "📊 Dashboard" : "📊"}
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            style={{
              width: "100%",
              padding: "12px",
              background: activeTab === "profile" ? "linear-gradient(135deg, var(--accent-light), var(--accent))" : "rgba(200, 180, 160, 0.1)",
              border: activeTab === "profile" ? "1px solid var(--accent-light)" : "1px solid var(--card-border)",
              borderRadius: "10px",
              color: activeTab === "profile" ? "white" : "var(--accent)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: sidebarOpen ? "left" : "center",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            {sidebarOpen ? "👤 Profile" : "👤"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px",
              background: "rgba(220, 150, 150, 0.1)",
              border: "1px solid rgba(220, 150, 150, 0.2)",
              borderRadius: "10px",
              color: "#b8826b",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: sidebarOpen ? "left" : "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              marginTop: "auto"
            }}
          >
            {sidebarOpen ? "🚪 Logout" : "🚪"}
          </button>

          {/* Learning Resources Section */}
          {sidebarOpen && (
            <div style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(200, 180, 160, 0.2)"
            }}>
              <h4 style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "12px",
                opacity: 0.7
              }}>
                📚 Learning Resources
              </h4>
              {recommendations?.skills && recommendations.skills.length > 0 ? (
                <div>
                  <label style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "var(--text-primary)",
                    display: "block",
                    marginBottom: "8px"
                  }}>
                    Select a recommended skill:
                  </label>
                  <select
                    value={expandedSkill || ""}
                    onChange={(e) => setExpandedSkill(e.target.value || null)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "6px",
                      border: "1px solid var(--card-border)",
                      background: "var(--card-bg)",
                      color: "var(--text-primary)",
                      fontSize: "12px",
                      cursor: "pointer",
                      marginBottom: "12px"
                    }}
                  >
                    <option value="">Select a skill...</option>
                    {recommendations.skills.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>

                  {/* Resources List - Top 5 */}
                  {expandedSkill && skillsData[expandedSkill]?.resources && (
                    <div style={{
                      maxHeight: "400px",
                      overflowY: "auto"
                    }}>
                      <p style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        marginBottom: "10px",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        ⭐ Top Resources (4+):
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {skillsData[expandedSkill].resources.slice(0, 5).map((resource, i) => (
                          <a
                            key={i}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              padding: "10px 8px",
                              background: "rgba(200, 180, 160, 0.08)",
                              borderRadius: "5px",
                              textDecoration: "none",
                              color: "var(--accent)",
                              fontSize: "11px",
                              fontWeight: "500",
                              transition: "all 0.2s ease",
                              display: "block",
                              border: "1px solid rgba(200, 180, 160, 0.15)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.background = "var(--accent)";
                              e.currentTarget.style.color = "white";
                              e.currentTarget.style.transform = "translateX(4px)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.background = "rgba(200, 180, 160, 0.08)";
                              e.currentTarget.style.color = "var(--accent)";
                              e.currentTarget.style.transform = "translateX(0)";
                            }}
                            title={resource.name}
                          >
                            {`${i + 1}. ${resource.name}`}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  opacity: 0.7
                }}>
                  No skills recommended yet
                </p>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px 20px", overflowY: "auto", position: "relative", height: "100vh", maxHeight: "100vh" }}>
        {/* Dark Mode Toggle - Small Icon in Corner */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "var(--card-bg)",
            border: "2px solid var(--card-border)",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(168, 142, 130, 0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Header */}
        <div style={{ marginBottom: "40px", animation: "fadeIn 0.5s ease-out", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{
              fontSize: "36px",
              marginBottom: "8px",
              background: "linear-gradient(135deg, #a88e82, #8b7d75)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              SkillQuest 🚀
            </h1>
            <p style={{ opacity: 0.6, fontSize: "14px", color: "var(--text-secondary)" }}>
              {user.email}
            </p>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <div className="card">
              <div>
                <h2>Welcome back 👋</h2>
                <p style={{ marginBottom: "15px", opacity: 0.9 }}>Ready to level up your skills?</p>
              </div>

              <p style={{ fontSize: "13px", opacity: 0.75, marginBottom: "25px", fontStyle: "italic", color: "var(--accent)" }}>
                🔮 Smart recommendations based on your skills
              </p>

              <div className="card-grid">
                <div className="mini-card" style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transformOrigin: "center"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(168, 142, 130, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "10px", animation: "float 3s ease-in-out infinite" }}>📈</div>
                    <div style={{ fontWeight: "600", marginBottom: "8px" }}>Skill Suggestions</div>
                    {recommendations ? (
                      <div style={{ marginTop: "10px", fontSize: "12px" }}>
                        {recommendations.skills.slice(0, 3).map((s, i) => (
                          <div key={i} style={{ padding: "4px 0", opacity: 0.9 }}>
                            • {s}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontSize: "12px", opacity: 0.7 }}>Loading...</div>
                    )}
                  </div>
                </div>

                <div className="mini-card" style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(168, 142, 130, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "10px", animation: "float 3s ease-in-out infinite 0.3s" }}>💡</div>
                    <div style={{ fontWeight: "600", marginBottom: "8px" }}>Project Ideas</div>
                    {recommendations ? (
                      <div style={{ marginTop: "10px", fontSize: "12px" }}>
                        {recommendations.projects.slice(0, 3).map((p, i) => (
                          <div key={i} style={{ padding: "4px 0", opacity: 0.9 }}>
                            • {p}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontSize: "12px", opacity: 0.7 }}>Loading...</div>
                    )}
                  </div>
                </div>

                <div className="mini-card" style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(168, 142, 130, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "10px", animation: "float 3s ease-in-out infinite 0.6s" }}>🎯</div>
                    <div style={{ fontWeight: "600", marginBottom: "8px" }}>Career Paths</div>
                    {recommendations ? (
                      <div style={{ marginTop: "10px", fontSize: "12px" }}>
                        {recommendations.careers.slice(0, 2).map((c, i) => (
                          <div key={i} style={{ padding: "4px 0", opacity: 0.9 }}>
                            • {c}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontSize: "12px", opacity: 0.7 }}>Loading...</div>
                    )}
                  </div>
                </div>

                <div className="mini-card" style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(168, 142, 130, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "10px", animation: "pulse 2s ease-in-out infinite" }}>⚡</div>
                    <div style={{ fontWeight: "600", marginBottom: "8px" }}>Streak</div>
                    {profileData ? (
                      <div style={{ marginTop: "10px", fontSize: "12px" }}>
                        <div style={{ fontSize: "28px", fontWeight: "700", color: "var(--accent)", marginBottom: "5px" }}>
                          {profileData.streak || 0}
                        </div>
                        <div style={{ fontSize: "10px", opacity: 0.7 }}>
                          {profileData.streak > 1 ? "Keep it going! 🔥" : "Start learning daily!"}
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "12px", opacity: 0.7 }}>Loading...</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Resources Modal */}
              {expandedSkill && skillsData[expandedSkill]?.resources && (
                <div style={{
                  marginTop: "25px",
                  padding: "15px",
                  background: "rgba(200, 180, 160, 0.1)",
                  borderRadius: "10px",
                  border: "1px solid rgba(200, 180, 160, 0.2)"
                }}>
                  <h3 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "12px", color: "#a88e82" }}>
                    📚 Resources for {expandedSkill}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {skillsData[expandedSkill].resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "10px",
                          background: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          color: "#a88e82",
                          border: "1px solid rgba(200, 180, 160, 0.2)",
                          fontSize: "13px",
                          fontWeight: "500",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          display: "block"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = "linear-gradient(135deg, #c4b5a8, #a88e82)";
                          e.target.style.color = "white";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "#a88e82";
                        }}
                      >
                        🔗 {resource.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && profileData && (
          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <div className="card">
              <h2>Your Profile</h2>

              <div style={{ marginTop: "25px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#a88e82" }}>
                  Skills
                </h3>
                <div className="tags">
                  {profileData.skills && profileData.skills.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 12px",
                        background: "linear-gradient(135deg, #c4b5a8, #a88e82)",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "12px"
                      }}
                    >
                      <span>{s}</span>
                      <select
                        value={proficiencyLevels[s] || "Intermediate"}
                        onChange={(e) => setProficiencyLevels({ ...proficiencyLevels, [s]: e.target.value })}
                        style={{
                          padding: "4px 6px",
                          borderRadius: "4px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          background: "rgba(255,255,255,0.2)",
                          color: "white",
                          fontSize: "11px",
                          cursor: "pointer"
                        }}
                      >
                        <option value="Beginner">🔰 Beginner</option>
                        <option value="Intermediate">📚 Intermediate</option>
                        <option value="Advanced">⭐ Advanced</option>
                        <option value="Expert">🏆 Expert</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "25px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#a88e82" }}>
                  Interests
                </h3>
                <div className="tags">
                  {profileData.interests && profileData.interests.map((interest, idx) => (
                    <span key={idx}>{interest}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={onEditProfile}
                style={{
                  marginTop: "25px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, #c4b5a8, #a88e82)",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  width: "100%"
                }}
              >
                Edit Profile ✏️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}