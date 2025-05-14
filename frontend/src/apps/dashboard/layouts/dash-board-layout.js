// src/apps/dashboard/layouts/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* You can have the sidebar, header, or any common elements here */}
      <Outlet /> {/* This will render the nested dashboard pages */}
    </div>
  );
};

export default DashboardLayout;
