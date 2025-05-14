// src/apps/dashboard/routes/dashboardRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="home" element={<DashboardHome />} />
        {/* Add more dashboard-related pages here */}
        {/* Add more dashboard-related pages here */}
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
