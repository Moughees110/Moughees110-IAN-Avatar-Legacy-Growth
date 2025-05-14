// src/apps/auth/layouts/AuthLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      {/* You can have common UI elements here for auth layout */}
      <Outlet /> {/* This will render the nested routes (e.g., Login, Signup) */}
    </div>
  );
};

export default AuthLayout;
