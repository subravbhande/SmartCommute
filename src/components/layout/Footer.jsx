import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              SmartCommute
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              SmartCommute is an AI-powered, multimodal urban journey
              orchestration platform focused on reliability, prediction,
              and real-time adaptation for daily commuters.
            </p>

            <div className="mt-5 space-y-1 text-sm text-gray-400">
              <p>📧 support@smartcommute.in</p>
              <p>📞 +91 91234 XXXXX</p>
              <p>📍 India</p>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/plan" className="hover:text-white transition">
                  Journey Planner
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-white transition">
                  Journey Timeline
                </Link>
              </li>
              <li>
                <Link to="/live" className="hover:text-white transition">
                  Live Monitoring
                </Link>
              </li>
              <li>
                <Link to="/why-route" className="hover:text-white transition">
                  Why This Route?
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/architecture" className="hover:text-white transition">
                  Architecture
                </Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Feedback
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Connect with Us
            </h3>

            {/* <p className="text-sm text-gray-400 mb-5">
              Follow us for updates, releases, and mobility insights.
            </p> */}

            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaTwitter className="text-lg" />
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
