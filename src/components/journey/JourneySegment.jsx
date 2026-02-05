import React from "react";
import {
  FaWalking,
  FaTrain,
  FaBus,
  FaTaxi,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const modeStyle = {
  Walk: {
    bg: "bg-gray-100 text-gray-700",
    icon: <FaWalking />,
  },
  Metro: {
    bg: "bg-indigo-100 text-indigo-700",
    icon: <FaTrain />,
  },
  "Local Train": {
    bg: "bg-yellow-100 text-yellow-700",
    icon: <FaTrain />,
  },
  Bus: {
    bg: "bg-green-100 text-green-700",
    icon: <FaBus />,
  },
  Cab: {
    bg: "bg-purple-100 text-purple-700",
    icon: <FaTaxi />,
  },
};

const statusStyle = {
  "On time": {
    icon: <FaCheckCircle className="text-green-600" />,
    text: "text-green-600",
  },
  Available: {
    icon: <FaCheckCircle className="text-green-600" />,
    text: "text-green-600",
  },
  Delayed: {
    icon: <FaExclamationTriangle className="text-yellow-600" />,
    text: "text-yellow-600",
  },
};

const JourneySegment = ({ segment }) => {
  const mode = modeStyle[segment.mode] || {
    bg: "bg-gray-100 text-gray-700",
    icon: <FaClock />,
  };

  const status =
    statusStyle[segment.status] || {
      icon: <FaClock className="text-gray-500" />,
      text: "text-gray-500",
    };

  return (
    <div className="flex items-center justify-between p-5 rounded-2xl border bg-white hover:shadow transition">

      {/* LEFT */}
      <div className="flex items-start gap-4">

        {/* MODE BADGE */}
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${mode.bg}`}
        >
          {mode.icon}
          <span>{segment.mode}</span>
        </div>

        {/* DETAILS */}
        <div>
          <p className="font-medium text-sm">
            {segment.from} → {segment.to}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            {segment.time}
            {segment.cost && <> • {segment.cost}</>}
          </p>
        </div>
      </div>

      {/* RIGHT STATUS */}
      <div className={`flex items-center gap-1 text-xs ${status.text}`}>
        {status.icon}
        <span>{segment.status}</span>
      </div>

    </div>
  );
};

export default JourneySegment;
