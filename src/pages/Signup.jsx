import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Mock signup: store user (for demo only)
    const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");
    users.push({ name, email });
    localStorage.setItem("mockUsers", JSON.stringify(users));
    alert("Account created (mock). Please login.");
    navigate("/login");
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 focus:outline-none"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 focus:outline-none"
          />
          <button type="submit" className="btn btn-primary w-full">
            Create account
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
