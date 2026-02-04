import React from "react";

const modeColor = {
  Walk: "bg-gray-100",
  Metro: "bg-indigo-100",
  "Local Train": "bg-yellow-100",
  Bus: "bg-green-100",
  Cab: "bg-purple-100",
};

const JourneySegment = ({ segment }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border bg-white hover:shadow transition">
      <div className="flex items-center gap-4">
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            modeColor[segment.mode] || "bg-gray-100"
          }`}
        >
          {segment.mode}
        </div>

        <div>
          <p className="font-medium text-sm">
            {segment.from} → {segment.to}
          </p>
          <p className="text-xs text-gray-500">
            {segment.time} • {segment.cost}
          </p>
        </div>
      </div>

      <span className="text-xs text-gray-600">
        {segment.status}
      </span>
    </div>
  );
};

export default JourneySegment;
