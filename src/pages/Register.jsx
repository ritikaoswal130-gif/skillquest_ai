import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await registerUser(email, password);
      setSuccess("Account created successfully! Please log in.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Create Account</h2>

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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

      {success && (
        <div style={{
          color: "#51cf66",
          fontSize: "13px",
          padding: "10px 12px",
          background: "rgba(81, 207, 102, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(81, 207, 102, 0.3)",
          animation: "fadeIn 0.3s ease-out"
        }}>
          {success}
        </div>
      )}

      <button disabled={loading} type="submit">
        {loading ? "Creating Account..." : "Register"}
      </button>
    </form>
  );
}