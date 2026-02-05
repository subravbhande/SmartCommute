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

/* MODE CONFIG */
const modeConfig = {
  Walk: {
    icon: <FaWalking />,
    badge: "bg-gray-100 text-gray-700",
  },
  Metro: {
    icon: <FaTrain />,
    badge: "bg-indigo-100 text-indigo-700",
  },
  "Local Train": {
    icon: <FaTrain />,
    badge: "bg-yellow-100 text-yellow-700",
  },
  Bus: {
    icon: <FaBus />,
    badge: "bg-green-100 text-green-700",
  },
  Cab: {
    icon: <FaTaxi />,
    badge: "bg-purple-100 text-purple-700",
  },
};

/* STATUS CONFIG */
const statusConfig = {
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

const JourneyCard = ({ segment }) => {
  const mode = modeConfig[segment.mode] || {
    icon: <FaClock />,
    badge: "bg-gray-100 text-gray-700",
  };

  const status =
    statusConfig[segment.status] || {
      icon: <FaClock className="text-gray-500" />,
      text: "text-gray-500",
    };

  return (
    <div className="bg-white p-5 rounded-2xl border hover:shadow transition">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${mode.badge}`}
        >
          {mode.icon}
          <span>{segment.mode}</span>
        </div>

        {segment.duration && (
          <span className="text-sm text-gray-500">
            {segment.duration}
          </span>
        )}
      </div>

      {/* ROUTE */}
      <p className="text-sm text-gray-700">
        {segment.from} → {segment.to}
      </p>

      {/* META */}
      <p className="text-xs text-gray-500 mt-1">
        {segment.time && segment.time}
        {segment.cost && <> • {segment.cost}</>}
      </p>

      {/* STATUS */}
      {segment.status && (
        <div
          className={`inline-flex items-center gap-1 mt-3 text-xs ${status.text}`}
        >
          {status.icon}
          <span>{segment.status}</span>
        </div>
      )}
    </div>
  );
};

export default JourneyCard;
