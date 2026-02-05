import React from "react";

/* -------- Live Journey Status (Dummy but Realistic) -------- */
const liveSteps = [
  {
    step: "Left Home",
    location: "Andheri East",
    time: "08:25",
    status: "completed",
  },
  {
    step: "Reached Metro Station",
    location: "JB Nagar",
    time: "08:32",
    status: "completed",
  },
  {
    step: "Metro Ride in Progress",
    location: "Andheri East → Ghatkopar",
    time: "08:40",
    status: "active",
    note: "Running on time",
  },
  {
    step: "Interchange & Walk",
    location: "Ghatkopar",
    time: "09:00",
    status: "upcoming",
  },
  {
    step: "Board Local Train",
    location: "Dadar",
    time: "09:10",
    status: "upcoming",
    note: "Expected 5 min delay",
  },
  {
    step: "Arrival at Pune Junction",
    location: "Pune",
    time: "11:25",
    status: "upcoming",
  },
];

const statusStyles = {
  completed: "bg-green-50 border-green-300",
  active: "bg-blue-50 border-blue-400",
  upcoming: "bg-white",
};

const LiveJourney = () => {
  return (
    <section className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold mb-1">
        Live Journey Tracking
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Real-time journey progress (demo data)
      </p>

      <div className="space-y-4">
        {liveSteps.map((s, i) => (
          <div
            key={i}
            className={`p-4 rounded-2xl border ${statusStyles[s.status]}`}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{s.step}</p>
              <span className="text-sm text-gray-500">
                {s.time}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              {s.location}
            </p>

            {s.note && (
              <p className="text-xs text-gray-500 mt-1">
                {s.note}
              </p>
            )}

            {s.status === "active" && (
              <p className="mt-2 text-xs font-medium text-blue-600">
                Currently in progress
              </p>
            )}

            {s.status === "completed" && (
              <p className="mt-2 text-xs font-medium text-green-600">
                Completed
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveJourney;
