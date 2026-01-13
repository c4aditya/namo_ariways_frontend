import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");      // NEW
  const [loading, setLoading] = useState(false); // NEW
  const navigate = useNavigate();              // NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4500/api/v1/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // backend ke hisaab se
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (!res.ok || !data.success) {
        setError(data.error || "Invalid email or password");
      } else {
        // Token save (optional but recommended)
        if (data.token) {
          localStorage.setItem("adminToken", data.token);
        }
        // ✅ Login success → navigate to admin panel
        navigate("/adminPanel"); // yahan apna admin route path use karo
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        {/* Error message */}
        {error && (
          <p style={{ color: "red", marginBottom: "10px", fontSize: "0.9rem" }}>
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  form: {
    background: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
