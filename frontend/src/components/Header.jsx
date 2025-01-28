import React from "react";

import { useAuth } from "../context/AuthContext";

function Header() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-md z-50 fixed top-0 left-0 w-full">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-green-600 tracking-wide">
              FeedForward
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
