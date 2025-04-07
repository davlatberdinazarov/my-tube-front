import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, email, password);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my-shop-api-n5vp.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md max-w-lg"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
      <p className="mt-2">
        Don't have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
