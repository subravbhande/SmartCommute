import React from "react";

const COLOR_STYLE = {
  yellow: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    ring: "ring-yellow-200",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    ring: "ring-green-200",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-200",
  },
};

const StatCard = ({ title, value, color = "indigo" }) => {
  const c = COLOR_STYLE[color];

  return (
    <div
      className={`
        ${c.bg} ${c.ring}
        rounded-2xl p-5 border ring-1
        hover:shadow-md hover:-translate-y-1
        transition-all duration-300
      `}
    >
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className={`text-3xl font-semibold ${c.text}`}>{value}</p>
    </div>
  );
};

export default StatCard;
