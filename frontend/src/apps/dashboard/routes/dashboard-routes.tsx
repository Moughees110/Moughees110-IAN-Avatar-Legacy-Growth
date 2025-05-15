import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard-layout";
import Home from "../pages/home";
import User from "../pages/user";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
