import { LogOut, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between relative z-10">
      {/* Left: App title */}
      <div>
        <h1 className="text-2xl font-semibold text-white">🎙️ Vibes By Horton</h1>
        <p className="text-sm text-gray-400">Real-time voice chat automation</p>
      </div>

      {/* Right: Profile & Dropdown */}
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
                alert("Logging out...");
                setMenuOpen(false);
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
  );
}
