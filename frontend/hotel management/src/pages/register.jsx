import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration successful!");
      navigate("/login");

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0B1120]">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md space-y-6"
    >

      

      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-white">
        Create your account
      </h2>

      {message && (
        <p className="text-red-400 text-center text-sm">{message}</p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-gray-400 mb-2 text-sm">
            Full name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-400 mb-2 text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-400 mb-2 text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-gray-400 mb-2 text-sm">
            Role
          </label>
          <select
            name="role"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
        >
          Register
        </motion.button>

      </form>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-indigo-400 hover:text-indigo-300 cursor-pointer"
        >
          Sign in
        </span>
      </p>

    </motion.div>
  </div>
);
};

export default Register;