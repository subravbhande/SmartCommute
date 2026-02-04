import React from "react";
import ProgressBar from "../components/comman/progressbar";

const insights = [
  {
    title: "Peak Crowd Window",
    value: "8:30 – 9:30 AM",
    impact: "High congestion expected",
    confidence: 92,
    color: "yellow",
  },
  {
    title: "Traffic Density",
    value: "Western Express Highway",
    impact: "Moderate congestion",
    confidence: 78,
    color: "blue",
  },
  {
    title: "Route Efficiency",
    value: "Bus Routes",
    impact: "+22% underutilized",
    confidence: 85,
    color: "green",
  },
];

const Insights = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Urban Mobility Insights</h1>
        <p className="text-gray-500 mt-1">
          AI-driven patterns derived from traffic, crowd, and historical data
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((i, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 transition"
          >
            <p className="text-sm text-gray-500">{i.title}</p>
            <p className="text-xl font-semibold mt-2">{i.value}</p>
            <p className="text-sm text-gray-600 mt-1">{i.impact}</p>

            <div className="mt-4">
              <ProgressBar value={i.confidence} color={i.color} />
              <p className="text-xs text-gray-500 mt-1">
                Confidence {i.confidence}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
