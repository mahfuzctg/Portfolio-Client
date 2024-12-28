import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For showing password
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const LoginPage: React.FC = () => {
  // Set default values from localStorage or empty string if not present
  const storedEmail = localStorage.getItem("email") || "";
  const storedPassword = localStorage.getItem("password") || "";

  const [email, setEmail] = useState<string>(storedEmail);
  const [password, setPassword] = useState<string>(storedPassword);
  const [showPassword, setShowPassword] = useState<boolean>(false); // For toggling password visibility
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      // Store the token in localStorage
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("email", email); // Store email for auto-fill
      localStorage.setItem("password", password); // Store password for auto-fill
      setSuccess(true);
      // Redirect to the dashboard or other page
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setSuccess(false);
    }
  };

  // Toggle show/hide password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Welcome Back! 😄
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="📧 Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between password and text
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="🔒 Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 disabled:bg-pink-400 transition"
          >
            {isLoading ? "Logging in... 🏃‍♀️" : "Login 🚀"}
          </button>
        </form>
        {isError && !success && (
          <p className="text-red-500 text-center mt-4">
            {error?.message || "Login failed 😔"}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mt-4">
            Login successful! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
