import React from "react";

const reasons = [
  {
    title: "Lower Crowd Density",
    description: "Selected train route has 22% less crowd than alternatives.",
  },
  {
    title: "Weather-Aware Planning",
    description: "Rain probability increased buffer time by 10 minutes.",
  },
  {
    title: "Historical Reliability",
    description: "This route has a 94% on-time arrival rate.",
  },
  {
    title: "Fallback Availability",
    description: "Multiple bus and cab options available on failure.",
  },
];

const WhyThisRoute = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Why This Route?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h4 className="font-semibold mb-2">{r.title}</h4>
            <p className="text-sm text-gray-600">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyThisRoute;
