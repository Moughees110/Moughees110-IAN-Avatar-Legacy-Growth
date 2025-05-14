// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoutes from './apps/auth/routes/authRoutesgigit';
import DashboardRoutes from './apps/dashboard/routes/dashboardRoutes';
import WebRoutes from './apps/web/routes/webRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/*" element={<WebRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
