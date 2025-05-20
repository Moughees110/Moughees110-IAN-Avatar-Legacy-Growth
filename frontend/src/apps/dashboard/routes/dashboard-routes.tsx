import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard-layout";
import User from "../pages/user";
import VoiceBotChat from "../pages/voicechat";
import Dashhome from "../pages/dashhome";
import LiveCall from "../pages/livecall";
import Calendar from '../pages/calendar';
import Integration from '../pages/integration';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashhome />} />
        <Route path="voice-bot-chat" element={<VoiceBotChat />} />
        <Route path="user" element={<User />} />
        <Route path="live-call" element={<LiveCall />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="integrations" element={<Integration />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  )
};

export default DashboardRoutes;
