import React, { useState, useEffect } from "react";
import AutocompleteInput from "../components/comman/AutocompleteInput";
import GeneratedJourney from "../components/journey/GeneratedJourney";
import RewardsCard from "../components/rewards/RewardsCard";
import StatCard from "../components/comman/StatCard";
import { journeyStats } from "../data/demoData";

import {
  FaRoute,
  FaBell,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaServer,
  FaCalendarAlt,
  FaClock as FaTime,
} from "react-icons/fa";

const Dashboard = () => {
  const [showJourney, setShowJourney] = useState(false);
  const [preference, setPreference] = useState("Fastest");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // default today date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  return (
    <div className="space-y-10">

      {/* PLAN JOURNEY + REWARDS */}
      <section className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow p-6 space-y-6">
          <h2 className="text-lg font-semibold">Plan Your Journey</h2>

          <AutocompleteInput placeholder="Starting Point" />
          <AutocompleteInput placeholder="Destination" />

          {/* DATE & TIME */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 text-sm" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded-xl h-12 pl-10 pr-4 text-sm
                focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <div className="relative">
              <FaTime className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 text-sm" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded-xl h-12 pl-10 pr-4 text-sm
                focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="flex gap-3">
            {["Fastest", "Cheapest", "Most Comfortable"].map((p) => (
              <button
                key={p}
                onClick={() => setPreference(p)}
                className={`px-4 py-1 rounded-full text-sm ${
                  preference === p
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowJourney(true)}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium"
          >
            Plan Journey →
          </button>
        </div>

        {/* RIGHT */}
        <RewardsCard />
      </section>

      {/* GENERATED JOURNEY */}
      {showJourney && <GeneratedJourney />}

      {/* LIVE FACTORS */}
      <section className="grid md:grid-cols-4 gap-6">
        <StatCard title="Traffic Density" value={`${journeyStats.trafficDensity}%`} />
        <StatCard title="Crowd Level" value={`${journeyStats.crowdLevel}%`} />
        <StatCard title="Weather" value={`${journeyStats.temperature}°C`} />
        <StatCard title="Peak Hours" value={journeyStats.peakHours ? "Yes" : "No"} />
      </section>

      {/* EXTRA DASHBOARD SECTIONS */}
      <section className="space-y-10">

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-3xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3 border rounded-xl p-4">
              <FaRoute className="text-indigo-600 text-xl" />
              <span>Re-plan Journey</span>
            </div>

            <div className="flex items-center gap-3 border rounded-xl p-4">
              <FaBell className="text-indigo-600 text-xl" />
              <span>Set Delay Alerts</span>
            </div>

            <div className="flex items-center gap-3 border rounded-xl p-4">
              <FaChartLine className="text-indigo-600 text-xl" />
              <span>View Travel Insights</span>
            </div>
          </div>
        </div>

        {/* WHY SMARTCOMMUTE */}
        <div className="bg-white rounded-3xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Why SmartCommute</h3>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <FaClock className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Time Reliable</p>
                <p className="text-gray-500">
                  Buffer-based planning avoids surprises
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaShieldAlt className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Risk Aware</p>
                <p className="text-gray-500">
                  Crowd and delay prediction built-in
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaRoute className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Multi-Modal</p>
                <p className="text-gray-500">
                  Metro, train, bus, cab combined
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="bg-white rounded-3xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>

          <div className="flex items-center gap-4 text-sm">
            <FaServer className="text-green-600 text-xl" />
            <span className="text-gray-700">
              All systems operational • Last updated 2 min ago
            </span>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Dashboard;
