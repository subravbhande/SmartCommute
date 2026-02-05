import React from "react";
import {
  FaTrain,
  FaBus,
  FaTaxi,
  FaWalking,
  FaBolt,
} from "react-icons/fa";

/* ---- Dummy route options (realistic, detailed) ---- */
const routes = [
  {
    duration: "3h 45m",
    price: "₹285",
    reliability: 92,
    arrival: "11:45 AM",
    buffer: "15 min",
    segments: [
      {
        mode: "Train",
        from: "Andheri East",
        to: "Dadar",
        time: "25 min",
        cost: "₹20",
      },
      {
        mode: "Train",
        from: "Dadar",
        to: "Pune Junction",
        time: "2h 15m",
        cost: "₹120",
      },
      {
        mode: "Cab",
        from: "Pune Junction",
        to: "COEP Pune",
        time: "15 min",
        cost: "₹145",
      },
    ],
  },
  {
    duration: "4h 15m",
    price: "₹195",
    reliability: 85,
    arrival: "12:15 PM",
    buffer: "20 min",
    segments: [
      {
        mode: "Metro",
        from: "Andheri East",
        to: "Ghatkopar",
        time: "18 min",
        cost: "₹30",
      },
      {
        mode: "Bus",
        from: "Ghatkopar",
        to: "Pune Bus Stand",
        time: "3h 20m",
        cost: "₹140",
      },
      {
        mode: "Walk",
        from: "Bus Stand",
        to: "COEP Pune",
        time: "12 min",
        cost: "Free",
      },
    ],
  },
  {
    duration: "3h 30m",
    price: "₹420",
    reliability: 96,
    arrival: "11:30 AM",
    buffer: "10 min",
    segments: [
      {
        mode: "Cab",
        from: "Andheri East",
        to: "COEP Pune",
        time: "3h 30m",
        cost: "₹420",
      },
    ],
  },
];

const modeIcon = {
  Train: <FaTrain />,
  Bus: <FaBus />,
  Metro: <FaTrain />,
  Cab: <FaTaxi />,
  Walk: <FaWalking />,
};

const GeneratedJourney = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-8">

      {/* LEFT: ROUTE OPTIONS */}
      <div className="lg:col-span-2 space-y-4">
        {routes.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-5 space-y-4"
          >
            {/* TOP SUMMARY */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm font-medium">
                <span>🕒 {r.duration}</span>
                <span>💰 {r.price}</span>
                <span className="text-green-600 flex items-center gap-1">
                  <FaBolt /> {r.reliability}% reliable
                </span>
              </div>

              <div className="text-right text-sm">
                <p className="text-gray-500">
                  Arrival {r.arrival}
                </p>
                <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                  Buffer {r.buffer}
                </span>
              </div>
            </div>

            {/* SEGMENT DETAILS */}
            <div className="border-t pt-3 space-y-3">
              {r.segments.map((s, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs">
                      {modeIcon[s.mode]} {s.mode}
                    </span>

                    <span className="text-gray-700">
                      {s.from} → {s.to}
                    </span>
                  </div>

                  <div className="text-right text-xs text-gray-500">
                    <p>{s.time}</p>
                    <p>{s.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: REAL-TIME FACTORS */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">⚡ Real-Time Factors</h3>
          <span className="text-xs text-green-600">● Live Updates</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p>Traffic Density</p>
            <p className="font-bold">67%</p>
            <span className="text-xs text-yellow-700">Moderate</span>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p>Crowd Level</p>
            <p className="font-bold">72%</p>
            <span className="text-xs text-yellow-700">Moderate</span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p>Weather</p>
            <p className="font-bold">28°C</p>
            <span className="text-xs text-green-700">Pleasant</span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p>Peak Hours</p>
            <p className="font-bold">No</p>
            <span className="text-xs text-green-700">Normal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratedJourney;
