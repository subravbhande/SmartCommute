import React from "react";

const steps = [
  { step: "Reached Metro Station", time: "08:32", done: true },
  { step: "Metro in progress", time: "08:40", active: true },
  { step: "Train boarding", time: "09:10" },
];

const LiveJourney = () => {
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Live Journey (Demo)</h2>

      <div className="space-y-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg border ${
              s.active ? "bg-blue-50 border-blue-400" : "bg-white"
            }`}
          >
            <p className="font-medium">{s.step}</p>
            <p className="text-sm text-gray-500">{s.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveJourney;
