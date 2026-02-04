import React from "react";

const journey = [
  {
    mode: "Walk",
    from: "Home",
    to: "Santacruz Station",
    time: "8 min",
    status: "completed",
  },
  {
    mode: "Train",
    from: "Santacruz",
    to: "Pune",
    time: "2h 10m",
    status: "delayed",
    delay: "12 min",
  },
  {
    mode: "Bus",
    from: "Pune Station",
    to: "Shivajinagar",
    time: "25 min",
    status: "upcoming",
  },
];

const fallback = {
  reason: "Train delay exceeds buffer threshold",
  option: "Switch to Express Bus",
  newETA: "3h 05m",
};

const statusStyle = {
  completed: "bg-green-50 border-green-300",
  delayed: "bg-yellow-50 border-yellow-400",
  upcoming: "bg-white",
};

const JourneyTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Journey Timeline</h1>
        <p className="text-gray-500 mt-1">
          Real-time journey tracking with proactive recovery
        </p>
      </div>

      <div className="space-y-4">
        {journey.map((j, i) => (
          <div
            key={i}
            className={`p-5 rounded-2xl border ${statusStyle[j.status]} transition`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{j.mode}</p>
              <span className="text-sm text-gray-600">{j.time}</span>
            </div>

            <p className="text-sm text-gray-600">
              {j.from} → {j.to}
            </p>

            {j.delay && (
              <p className="text-sm text-red-600 mt-1">
                Delay detected: {j.delay}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* FALLBACK */}
      <div className="bg-red-50 border border-red-300 rounded-2xl p-6">
        <h3 className="font-semibold text-red-700 mb-1">
          Fallback Activated
        </h3>
        <p className="text-sm text-gray-700">{fallback.reason}</p>
        <p className="font-medium mt-2">{fallback.option}</p>
        <p className="text-sm text-gray-600">
          Updated ETA: {fallback.newETA}
        </p>
      </div>
    </div>
  );
};

export default JourneyTimeline;
