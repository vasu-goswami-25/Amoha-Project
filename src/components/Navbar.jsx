import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.jpg"; // <-- path to your logo

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + brand text (logo sized small) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Amoha Codes"
            className="w-8 h-8 object-contain"    // <-- small logo size (20px)
          /><br></br>
          <span className="hidden sm:inline text-xl font-extrabold text-primary">
            Amoha Codes 
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Practice", path: "/practice" },
            { name: "Course", path: "/course" },
            { name: "Internship", path: "/internship" },
            { name: "Contact Us", path: "/contact" },
          ].map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `hover:text-primary transition ${
                  isActive ? "text-primary font-semibold" : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </nav>

        {/* Right side: Login / Signup / Theme */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-block px-3 py-1 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
          >
            Login
          </Link>

          <Link to="/signup" className="hidden sm:inline-block btn btn-primary px-4 py-1">
            Sign up
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
