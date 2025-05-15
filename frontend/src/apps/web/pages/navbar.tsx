import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = ["Features", "Process", "Pricing", "Contact", "Updates"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0B0D11] text-white border-b border-[#1a1a1a] fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl italic font-medium">Landio</span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex space-x-6 bg-[#0a0a0a] px-6 py-2 rounded-full border border-[#1a1a1a]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold hover:text-gray-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link to="/auth/login">
            <button className="flex items-center cursor-pointer gap-2 bg-[#121212] border border-[#1f1f1f] px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition">
              <span className="text-sm font-semibold">Login</span>
            </button>
          </Link>
          <Link to="/auth/signup">
            <button className="flex items-center cursor-pointer ml-2 gap-2 bg-[#121212] border border-[#1f1f1f] px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition">
              <span className="text-sm font-semibold">Sign Up</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm font-semibold hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="flex items-center cursor-pointer gap-2 bg-[#121212] border border-[#1f1f1f] px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition w-full">
            <span className="text-sm font-semibold">Login</span>
          </button>
          <button className="flex items-center  cursor-pointer gap-2 bg-[#121212] border border-[#1f1f1f] px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition w-full">
            <span className="text-sm font-semibold">Sign Up</span>
          </button>
        </div>
      )}
    </header>
  );
}
