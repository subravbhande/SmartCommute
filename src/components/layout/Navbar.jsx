import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          SmartCommute
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={isActive("/")}>Dashboard</Link>
          <Link to="/plan" className={isActive("/plan")}>Planner</Link>
          <Link to="/timeline" className={isActive("/timeline")}>Timeline</Link>
          <Link to="/live" className={isActive("/live")}>Live</Link>
          <Link to="/insights" className={isActive("/insights")}>Insights</Link>
          <Link to="/architecture" className={isActive("/architecture")}>Architecture</Link>

          {/* Profile (future auth) */}
          <button className="ml-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm animate-fadeIn">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link onClick={() => setOpen(false)} to="/" className={isActive("/")}>Dashboard</Link>
            <Link onClick={() => setOpen(false)} to="/plan" className={isActive("/plan")}>Planner</Link>
            <Link onClick={() => setOpen(false)} to="/timeline" className={isActive("/timeline")}>Timeline</Link>
            <Link onClick={() => setOpen(false)} to="/live" className={isActive("/live")}>Live</Link>
            <Link onClick={() => setOpen(false)} to="/insights" className={isActive("/insights")}>Insights</Link>
            <Link onClick={() => setOpen(false)} to="/architecture" className={isActive("/architecture")}>Architecture</Link>

            <button className="mt-2 w-full px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
