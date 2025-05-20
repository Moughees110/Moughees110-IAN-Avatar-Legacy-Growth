import { useState } from 'react'
import {
  Mic,
  Home as HomeIcon,
  PhoneIcon,
  User,
  Spline,
  CalendarSync,
  Pause,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false)

  const navItems = [
    { label: 'Dashboard', icon: <HomeIcon size={20} />, to: '/dashboard' },
    {
      label: 'Voice Chats',
      icon: <Mic size={20} />,
      to: '/dashboard/voicebotchat',
    },
    { label: 'User', icon: <User size={20} />, to: '/dashboard/user' },
    {
      label: 'Live Call',
      icon: <PhoneIcon size={20} />,
      to: '/dashboard/livecall',
    },
  ]

  return (
    <aside className="w-64 bg-[#1a1d22] text-white h-screen p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">Vibes By Horton</div>
      <nav className="flex flex-col space-y-4">
        {navItems.map(({ label, icon, to }) => (
          <Link
            key={label}
            to={to}
            className={`flex items-center space-x-2 hover:text-blue-400 ${
              location.pathname === to ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}

        {/* Integrations Dropdown */}
        <div>
          <button
            onClick={() => setIsIntegrationsOpen(!isIntegrationsOpen)}
            className="flex items-center space-x-2 w-full hover:text-blue-400"
          >
            <Spline size={20} />
            <span className="flex-1 text-left">Integrations</span>
            {isIntegrationsOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {isIntegrationsOpen && (
            <div className="ml-6 mt-2 flex flex-col space-y-2">
              <Link
                to="/dashboard/google-calendar"
                className={`flex items-center space-x-2 hover:text-blue-400 ${
                  location.pathname === '/dashboard/google-calendar'
                    ? 'text-blue-400 font-semibold'
                    : ''
                }`}
              >
                <CalendarSync size={18} />
                <span>Google Calendar</span>
              </Link>
              <Link
                to="/dashboard/eleven-labs"
                className={`flex items-center space-x-2 hover:text-blue-400 ${
                  location.pathname === '/dashboard/eleven-labs'
                    ? 'text-blue-400 font-semibold'
                    : ''
                }`}
              >
                <Pause size={18} />
                <span>ElevenLabs</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
