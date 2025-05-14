import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <PrivateRoute path="home" element={<DashboardHome />} />
        {/* Add other dashboard-related routes here */}
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
