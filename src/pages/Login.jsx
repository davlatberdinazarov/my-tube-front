import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { $axios } from "../utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await $axios.post(`/auth/login`, {
        email,
        password,
      })
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      alert(error.response.data.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form
        onSubmit={ handleLogin }
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      <p className="mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};


export default Login