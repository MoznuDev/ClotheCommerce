import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contract", label: "Contract" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-bgColor fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between p-4">
        <NavLink to="/" className="text-2xl font-bold text-gray-800 font-jaro">
          Rivo
        </NavLink>

        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6 justify-center text-center">
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* AddToCart */}
          <div className="relative">
            <FaShoppingBag size={22} />
            <div className="absolute top-0 left-3 text-btnColor font-bold">0</div>
          </div>

          {/* Login Button */}
          <div>
            <button className="py-2 px-6 rounded-full border-2 bg-bgColor hover:bg-btnColor hover:text-white">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.path} onClick={toggleMenu}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

