import React, { useState } from "react";
import { journeyStats, aiModels, insights } from "../data/demoData";
import ProgressBar from "../components/comman/progressbar";
import StatCard from "../components/comman/StatCard";
import AutocompleteInput from "../components/comman/AutocompleteInput";

/* -------- Dummy Generated Journey (Backend-like) -------- */
const generatedJourney = {
  from: "Andheri East",
  to: "COEP Pune",
  totalTime: "2h 45m",
  totalCost: "₹420",
  confidence: 91,
  risk: "Medium",

  segments: [
    {
      mode: "Walk",
      from: "Home",
      to: "Metro Station",
      time: "8 min",
      cost: "Free",
      status: "On time",
    },
    {
      mode: "Metro",
      from: "Andheri East",
      to: "Ghatkopar",
      time: "18 min",
      cost: "₹30",
      status: "On time",
    },
    {
      mode: "Local Train",
      from: "Dadar",
      to: "Pune",
      time: "2h 10m",
      cost: "₹120",
      status: "5 min delay",
    },
    {
      mode: "Cab",
      from: "Pune Station",
      to: "COEP",
      time: "9 min",
      cost: "₹270",
      status: "Available",
    },
  ],

  fallback: {
    reason: "Train delay exceeds buffer time",
    suggestion: "Switch to Express Bus",
    newETA: "3h 05m",
  },
};

const modeBadge = {
  Walk: "bg-gray-100 text-gray-700",
  Metro: "bg-blue-100 text-blue-700",
  "Local Train": "bg-yellow-100 text-yellow-700",
  Cab: "bg-purple-100 text-purple-700",
};

const Dashboard = () => {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <div className="space-y-20">

      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold text-gray-800">
          Good evening, commuter 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Plan smarter journeys with real-time intelligence
        </p>
      </section>

      {/* JOURNEY PLANNER */}
      <section className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Journey Planner</h2>
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
            AI Assisted
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AutocompleteInput placeholder="From location" />
          <AutocompleteInput placeholder="Destination" />
        </div>

        <div className="flex gap-3 mt-6">
          <button className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
            Fastest
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
            Cheapest
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
            Comfort
          </button>
        </div>

        <button
          onClick={() => setShowJourney(true)}
          className="mt-8 w-full h-14 rounded-2xl
          bg-gradient-to-r from-indigo-600 to-purple-600
          text-white font-semibold text-lg
          hover:scale-[1.02] transition"
        >
          Generate Journey →
        </button>
      </section>

      {/* GENERATED JOURNEY */}
      {showJourney && (
        <section className="bg-white rounded-3xl shadow-xl p-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold">Generated Journey</h2>
              <p className="text-sm text-gray-500">
                {generatedJourney.from} → {generatedJourney.to}
              </p>
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-gray-500">Total Time</p>
                <p className="font-semibold">{generatedJourney.totalTime}</p>
              </div>
              <div>
                <p className="text-gray-500">Estimated Cost</p>
                <p className="font-semibold">{generatedJourney.totalCost}</p>
              </div>
            </div>
          </div>

          {/* SEGMENTS */}
          <div className="space-y-4">
            {generatedJourney.segments.map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-5 rounded-2xl border hover:shadow transition"
              >
                <div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${modeBadge[s.mode]}`}
                  >
                    {s.mode}
                  </span>

                  <p className="text-sm font-medium mt-2">
                    {s.from} → {s.to}
                  </p>
                  <p className="text-xs text-gray-500">
                    {s.time} • {s.cost}
                  </p>
                </div>

                <span className="text-xs text-gray-600">
                  {s.status}
                </span>
              </div>
            ))}
          </div>

          {/* AI CONFIDENCE */}
          <div className="mt-10 bg-indigo-50 rounded-2xl p-6">
            <p className="text-sm font-medium">
              AI Confidence: {generatedJourney.confidence}%
            </p>
            <ProgressBar value={generatedJourney.confidence} color="green" />
            <p className="text-xs text-gray-600 mt-2">
              Risk Level: {generatedJourney.risk}
            </p>
          </div>

          {/* FALLBACK */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <p className="font-semibold text-sm">Fallback Ready</p>
            <p className="text-sm text-gray-600 mt-1">
              {generatedJourney.fallback.reason}
            </p>
            <p className="text-sm font-medium mt-2">
              Suggested: {generatedJourney.fallback.suggestion}
            </p>
            <p className="text-xs text-gray-500">
              Updated ETA: {generatedJourney.fallback.newETA}
            </p>
          </div>
        </section>
      )}

      {/* LIVE CONDITIONS */}
      <section>
        <h2 className="text-xl font-semibold mb-6">
          Live Urban Conditions
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <StatCard title="Traffic Density" value={`${journeyStats.trafficDensity}%`} color="yellow" />
          <StatCard title="Crowd Level" value={`${journeyStats.crowdLevel}%`} color="yellow" />
          <StatCard title="Weather" value={`${journeyStats.temperature}°C`} color="green" />
          <StatCard title="Peak Hours" value={journeyStats.peakHours ? "Yes" : "No"} color="green" />
        </div>
      </section>

      {/* AI MODELS */}
      <section className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-xl font-semibold mb-6">
          AI Engines Running
        </h2>

        <div className="space-y-5">
          {aiModels.map((m, i) => (
            <div key={i} className="p-5 rounded-2xl border hover:shadow transition">
              <div className="flex justify-between items-center">
                <p className="font-medium">{m.name}</p>
                <span className="badge">{m.status}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Accuracy {m.accuracy}% • Latency {m.latency}
              </p>

              <ProgressBar value={m.accuracy} color="green" />
            </div>
          ))}
        </div>
      </section>

      {/* AI INSIGHTS */}
      <section>
        <h2 className="text-xl font-semibold mb-6">AI Insights</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((i, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold">{i.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{i.text}</p>

              <div className="mt-4">
                <ProgressBar value={i.confidence} color={i.color} />
                <p className="text-xs text-gray-500 mt-1">
                  Confidence {i.confidence}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
