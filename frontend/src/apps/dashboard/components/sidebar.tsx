import { Mic, Settings, Home } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">VoiceBot</div>
      <nav className="flex flex-col space-y-4">
        <button className="flex items-center space-x-2 hover:text-blue-400">
          <Home size={20} />
          <span>Dashboard</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-400">
          <Mic size={20} />
          <span>Voice Chats</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-400">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
}
