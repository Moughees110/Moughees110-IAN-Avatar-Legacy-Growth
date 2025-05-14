// src/apps/web/layouts/WebLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const WebLayout = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      {/* Any common UI for public-facing pages */}
      <Outlet /> {/* This will render the nested pages like Home, About */}
    </div>
  );
};

export default WebLayout;
