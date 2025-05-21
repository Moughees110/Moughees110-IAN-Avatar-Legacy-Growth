import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard-layout";
import User from "../pages/user";
import VoiceBotChat from "../pages/voicechat";
import Dashhome from "../pages/dashhome";
import LiveCall from "../pages/livecall";

import Integration from '../pages/integration';
import GoogleCalendar from '../pages/google-calendar';
import ElevenLabs from '../pages/eleven-labs';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashhome />} />
        <Route path="voice-bot-chat" element={<VoiceBotChat />} />
        <Route path="user" element={<User />} />
        <Route path="live-call" element={<LiveCall />} />

        <Route path="integrations" element={<Integration />} />
        <Route path="google-calendar" element={<GoogleCalendar />} />
        <Route path="eleven-labs" element={<ElevenLabs />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  )
};

export default DashboardRoutes;
