import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
