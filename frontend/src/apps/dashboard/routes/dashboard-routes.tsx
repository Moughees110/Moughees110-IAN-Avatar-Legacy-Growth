import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard-layout";
import User from "../pages/user";
import VoiceBotChat from "../pages/voicechat";
import Dashhome from "../pages/dashhome";
import LiveCall from "../pages/livecall";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashhome />} />
        <Route path="voicebotchat" element={<VoiceBotChat />} />
        <Route path="user" element={<User />} />
        <Route path="livecall" element={<LiveCall />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
