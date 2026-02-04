import React from "react";

const journey = [
  { mode: "Walk", from: "Home", to: "Metro Station", time: "8 min" },
  {
    mode: "Metro",
    from: "Andheri",
    to: "Ghatkopar",
    time: "17 min",
    status: "On time",
  },
  {
    mode: "Train",
    from: "Dadar",
    to: "Pune",
    time: "2h 5m",
    status: "5 min delay",
  },
  { mode: "Auto", from: "Station", to: "Office", time: "10 min" },
];

const Planner = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Journey Plan</h1>
        <p className="text-gray-500 mt-1">
          Optimized multimodal journey with buffers
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-sm text-gray-600">
          From <b>Andheri East</b> to <b>Office, Pune</b>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Total Time: <b>2h 40m</b> • Buffer: <b>15 min</b>
        </p>
      </div>

      <div className="space-y-4">
        {journey.map((j, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border hover:shadow transition"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{j.mode}</p>
              <span className="text-sm text-gray-500">{j.time}</span>
            </div>

            <p className="text-sm text-gray-600">
              {j.from} → {j.to}
            </p>

            {j.status && (
              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                {j.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
