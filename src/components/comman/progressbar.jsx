import React from "react";

const colorMap = {
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
};

const ProgressBar = ({ value, color = "blue" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
      <div
        className={`h-2 rounded-full transition-all duration-700 ${colorMap[color]}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
