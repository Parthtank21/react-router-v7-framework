import React from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <header>
        <nav>Navigation</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
