import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      alert("Login successful!");
      navigate("/dashboard");

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120]">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm space-y-4"
      >

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-white">
          Sign in to your account
        </h2>

        {message && (
          <p className="text-red-400 text-center text-xs">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Email */}
          <div>
            <label className="block text-gray-400 mb-1 text-xs">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-3 py-1.5 bg-[#1E293B] text-white text-sm rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <label>Password</label>
              <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
                Forgot?
              </span>
            </div>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-3 py-1.5 bg-[#1E293B] text-white text-sm rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-1.5 text-sm rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Sign in
          </motion.button>

        </form>

        <p className="text-center text-gray-500 text-xs">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-400 hover:text-indigo-300 cursor-pointer"
          >
            Create one
          </span>
        </p>

      </motion.div>
    </div>
  );
};

export default Login;