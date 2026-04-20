import { useState } from "react";
import { loginUser } from "../services/authService";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await loginUser(email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Welcome Back</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}