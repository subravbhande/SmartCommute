import React from "react";

const architecture = [
  {
    title: "User Interface (React)",
    purpose: "What the commuter directly interacts with",
    color: "indigo",
    items: [
      "Journey Planner with multimodal routes",
      "Live journey timeline and alerts",
      "AI confidence score and insights",
      "Fallback suggestions on disruption",
    ],
  },
  {
    title: "Journey Orchestration Layer",
    purpose: "Breaks one trip into multiple reliable segments",
    color: "purple",
    items: [
      "Splits journey into walk, train, bus, cab",
      "Adds buffer time between segments",
      "Tracks dependency between segments",
      "Replans dynamically on failure",
    ],
  },
  {
    title: "AI Decision Engine",
    purpose: "Predicts risk and optimizes decisions",
    color: "green",
    items: [
      "Delay prediction using historical patterns",
      "Crowd level estimation for safety",
      "Confidence scoring (0–100%)",
      "Route comparison and ranking",
    ],
  },
  {
    title: "Real-Time Data Layer",
    purpose: "Feeds live conditions into the system",
    color: "yellow",
    items: [
      "Traffic congestion indicators",
      "Weather and rain probability",
      "Transport schedules and delays",
      "User location (GPS)",
    ],
  },
  {
    title: "Fallback & Recovery Logic",
    purpose: "Ensures the user never gets stuck",
    color: "red",
    items: [
      "Suggests next available bus/train",
      "Offers cab or alternate route",
      "Updates ETA and confidence instantly",
      "Notifies user with clear actions",
    ],
  },
  {
    title: "Backend & APIs (Future Scope)",
    purpose: "Scales the system for real deployment",
    color: "gray",
    items: [
      "/planJourney – generate route plan",
      "/updateJourney – live updates",
      "/fallback – recovery suggestions",
      "User profiles and journey history",
    ],
  },
];

const Architecture = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          How SmartCommute Works
        </h1>
        <p className="text-gray-600 max-w-3xl">
          SmartCommute treats a commute as a single intelligent system, not
          disconnected trips. This architecture ensures reliability, safety,
          and real-time adaptability for urban commuters.
        </p>
      </div>

      {/* FLOW EXPLANATION */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
        <h2 className="font-semibold mb-2">High-Level Flow</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          User enters source and destination → system builds a multimodal plan →
          AI evaluates delay and crowd risk → journey is monitored live →
          fallback is triggered if any segment fails → user always has a next step.
        </p>
      </div>

      {/* ARCHITECTURE CARDS */}
      <div className="grid md:grid-cols-2 gap-8">
        {architecture.map((layer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">
              {layer.title}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {layer.purpose}
            </p>

            <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
              {layer.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WHY THIS MATTERS */}
      <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
        <h2 className="font-semibold mb-3">
          Why This Architecture Matters
        </h2>

        <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
          <li>Reduces uncertainty in daily commuting</li>
          <li>Prevents cascading failures across transport modes</li>
          <li>Improves safety during crowding and bad weather</li>
          <li>Builds trust with confidence-based recommendations</li>
          <li>Scales easily to real-world city deployments</li>
        </ul>
      </div>

    </div>
  );
};

export default Architecture;
