// src/apps/web/routes/webRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebLayout from '../layouts/WebLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Add more public-facing routes here */}
      </Route>
    </Routes>
  );
};

export default WebRoutes;
