import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // keep or remove if you don't have a logo

export default function Hero() {
  return (
    <section className="section text-center flex flex-col items-center justify-center">
      {/** Logo */}
      <img src={logo} alt="Amoha Codes Logo" className="w-15 h-15 mb-6" />

      {/** Main heading */}
      <h1 className="text-5xl font-extrabold mb-4">Master DSA & Development</h1>
      <p className="section-subtitle">
        Learn with structured courses, practice problems, and real-world projects.
      </p>

      {/** Primary CTA */}
      <div className="mt-8 flex gap-3 items-center">
        <Link to="/practice" className="btn btn-primary px-6 py-3">
          🚀 Get Started
        </Link>

        {/** small Login and Signup beside CTA (visible on all sizes) */}
        <div className="flex gap-3 items-center">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary px-4 py-2">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
