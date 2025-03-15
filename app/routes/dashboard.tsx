import React from "react";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Outlet />
    </div>
  );
}
