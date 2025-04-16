import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" exact element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}
