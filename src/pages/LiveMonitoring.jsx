import React from "react";

const steps = [
  { step: "Reached Metro Station", time: "08:32", status: "done" },
  { step: "Metro in progress", time: "08:40", status: "active" },
  { step: "Train boarding", time: "09:10", status: "upcoming" },
];

const LiveMonitoring = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Live Journey Monitoring</h1>
        <p className="text-gray-500 mt-1">
          Real-time updates powered by AI predictions
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border ${
              s.status === "active"
                ? "bg-indigo-50 border-indigo-400"
                : s.status === "done"
                ? "bg-green-50 border-green-300"
                : "bg-white"
            }`}
          >
            <p className="font-medium">{s.step}</p>
            <p className="text-sm text-gray-500">{s.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMonitoring;
