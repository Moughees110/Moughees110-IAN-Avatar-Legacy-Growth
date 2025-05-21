import {
  LogOut,
  ChevronDown,
  Menu,
  X,
  Home,
  Mic,
  PhoneIcon,
  Calendar,
  User,
  Spline,
  CalendarSync,
  Pause,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Dashboard", icon: <Home size={20} />, to: "/dashboard" },
    {
      label: "Voice Chats",
      icon: <Mic size={20} />,
      to: "/dashboard/voice-bot-chat",
    },
    {
      label: "Live Call",
      icon: <PhoneIcon size={20} />,
      to: "/dashboard/live-call",
    },
    { label: "User", icon: <User size={20} />, to: "/dashboard/user" },
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
    <>
      <header className="bg-[#1a1d22] text-white px-6 py-4 shadow-md flex items-center justify-between relative z-10">
        {/* Left: Logo + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              🎙️ Vibes By Horton
            </h1>
            <p className="text-sm text-gray-400">
              Real-time voice chat automation
            </p>
          </div>
        </div>

        {/* Right: Profile dropdown */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 hover:bg-gray-800 px-3 py-2 rounded-lg transition"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-9 h-9 rounded-full border border-gray-600"
            />
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
            <ChevronDown size={18} className="text-gray-400" />
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg animate-fade-in">
              <button
                onClick={() => {
                  alert('Logging out...')
                  setMenuOpen(false)
                }}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-700 flex items-center gap-2 text-white"
              >
                <LogOut size={16} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Sheet (inline) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Side Drawer */}
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 p-4 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map(({ label, icon, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 hover:text-blue-400 ${
                    location.pathname === to
                      ? 'text-blue-400 font-semibold'
                      : ''
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
