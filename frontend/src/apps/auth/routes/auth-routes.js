// src/apps/auth/routes/authRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* You can add more authentication-related routes here */}
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
