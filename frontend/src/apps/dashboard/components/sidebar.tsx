import {
  Mic,
  Settings,
  Home as HomeIcon,
  PhoneIcon,
  Calendar,
  User,
  Spline,
  CalendarSync,
  Pause,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import User from '../pages/user';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <HomeIcon size={20} />, to: "/dashboard" },
    {
      label: "Voice Chats",
      icon: <Mic size={20} />,
      to: "/dashboard/voice-bot-chat",
    },
    { label: "User", icon: <User size={20} />, to: "/dashboard/user" },
    {
      label: "Live Call",
      icon: <PhoneIcon size={20} />,
      to: "/dashboard/live-call",
    },
    {
      label: "Calendar",
      icon: <Calendar size={20} />,
      to: "/dashboard/calendar",
    },
    {
      label: "Integrations",
      icon: <Spline size={20} />,
      to: "/dashboard/integrations",
    },
    {
      label: "Google Calendar",
      icon: <CalendarSync size={20} />,
      to: "/dashboard/google-calendar",
    },
    {
      label: "ElevenLabs",
      icon: <Pause size={20} />,
      to: "/dashboard/eleven-labs",
    },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">Vibes By Horton</div>
      <nav className="flex flex-col space-y-4">
        {navItems.map(({ label, icon, to }) => (
          <Link
            key={label}
            to={to}
            className={`flex items-center space-x-2 hover:text-blue-400 ${
              location.pathname === to ? "text-blue-400 font-semibold" : ""
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
