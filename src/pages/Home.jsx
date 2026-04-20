import { useEffect } from "react";

export default function Home({ onNavigateToLogin, onNavigateToRegister }) {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.style.opacity = "1";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-secondary)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Orbs */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glow-animation {
          0%, 100% { box-shadow: 0 0 30px rgba(168, 142, 130, 0.3); }
          50% { box-shadow: 0 0 60px rgba(168, 142, 130, 0.6); }
        }
        .floating-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative floating elements */}
      <div className="floating-orb" style={{ width: "300px", height: "300px", background: "var(--accent)", top: "-150px", left: "-150px", animationDelay: "0s" }} />
      <div className="floating-orb" style={{ width: "200px", height: "200px", background: "var(--accent-light)", bottom: "-100px", right: "-100px", animationDelay: "2s" }} />
      <div className="floating-orb" style={{ width: "150px", height: "150px", background: "var(--accent)", top: "50%", right: "-75px", animationDelay: "1s" }} />

      {/* Logo and Title */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Animated Logo */}
        <div
          style={{
            fontSize: "80px",
            marginBottom: "30px",
            animation: "float 4s ease-in-out infinite",
            filter: "drop-shadow(0 10px 20px rgba(168, 142, 130, 0.2))"
          }}
        >
          🎓
        </div>

        {/* App Name */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "20px",
            background: "linear-gradient(135deg, var(--accent), #8b7d75, var(--accent-light))",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "slideInRight 0.8s ease-out, glow 3s ease-in-out infinite",
            letterSpacing: "-2px"
          }}
        >
          SkillQuest AI
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "24px",
            color: "var(--text-secondary)",
            fontWeight: "300",
            letterSpacing: "1px",
            animation: "slideInLeft 0.8s ease-out 0.2s both",
            textTransform: "uppercase",
            opacity: 0.8
          }}
        >
          Master Skills. Accelerate Growth. 🚀
        </p>

        {/* Subtle Description */}
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            opacity: 0.6,
            marginTop: "15px",
            animation: "fadeIn 1s ease-out 0.4s both",
            fontStyle: "italic",
            maxWidth: "300px"
          }}
        >
          AI-powered learning paths tailored to your goals
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "fadeIn 1s ease-out 0.6s both",
          position: "relative",
          zIndex: 1
        }}
      >
        <button
          onClick={onNavigateToRegister}
          style={{
            padding: "16px 48px",
            fontSize: "16px",
            fontWeight: "700",
            background: "linear-gradient(135deg, var(--accent-light), var(--accent))",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 25px rgba(168, 142, 130, 0.3)",
            letterSpacing: "0.5px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 35px rgba(168, 142, 130, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(168, 142, 130, 0.3)";
          }}
        >
          START LEARNING →
        </button>
        <button
          onClick={onNavigateToLogin}
          style={{
            padding: "16px 48px",
            fontSize: "16px",
            fontWeight: "700",
            background: "transparent",
            color: "var(--accent)",
            border: "2px solid var(--accent)",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SIGN IN
        </button>
      </div>

      {/* Floating Text Animation */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          color: "var(--text-secondary)",
          opacity: 0.5,
          fontSize: "12px",
          animation: "fadeIn 1.2s ease-out 0.8s both",
          letterSpacing: "1px"
        }}
      >
        <p>Unlock your potential with personalized AI guidance</p>
      </div>
    </div>
  );
}
