import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ComplexNavbar } from "../components/navbar";
import { $api } from "../utils";

export const MainContext = createContext()

export default function MainLayout() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const getProfile = async () => {
    try {
      const response = await $api.get('/auth/profile')
      setUser(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  const logOut = () => {
    navigate("/login")
    localStorage.clear()
  }

  return (
    <MainContext.Provider value={{ user, logOut }}>
      <ComplexNavbar user={user} />
      <Outlet />
    </MainContext.Provider>
  );
}
