import { Mic, Settings, Home as HomeIcon, PhoneIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <HomeIcon size={20} />, to: "/dashboard" },
    {
      label: "Voice Chats",
      icon: <Mic size={20} />,
      to: "/dashboard/voicebotchat",
    },
    { label: "User", icon: <Settings size={20} />, to: "/dashboard/user" },
    {
      label: "Live Call",
      icon: <PhoneIcon size={20} />,
      to: "/dashboard/livecall",
    },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">VoiceBot</div>
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
