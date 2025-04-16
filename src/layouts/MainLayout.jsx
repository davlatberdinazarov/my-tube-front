import React from "react";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../components/navbar";

export default function MainLayout() {
  return (
    <div>
      <ComplexNavbar />
      <Outlet />
    </div>
  );
}
