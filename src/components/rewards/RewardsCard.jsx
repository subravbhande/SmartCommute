import React from "react";
import ProgressBar from "../comman/progressbar";
import { FaTrophy, FaStar, FaLevelUpAlt, FaGift } from "react-icons/fa";

const RewardsCard = () => {
  const rewards = {
    points: 250,
    level: 3,
    remaining: 750,
  };

  const progress =
    (rewards.points / (rewards.points + rewards.remaining)) * 100;

  return (
    <div className="bg-white rounded-3xl shadow p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaTrophy className="text-purple-600" />
          <h3 className="font-semibold">Your Rewards</h3>
        </div>

        <button className="text-xs px-3 py-1 rounded-full bg-purple-600 text-white">
          Redeem
        </button>
      </div>

      {/* STATS */}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaStar className="text-yellow-500" />
            Points
          </div>
          <p className="text-3xl font-bold">{rewards.points}</p>
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1 text-sm text-gray-500 justify-end">
            <FaLevelUpAlt className="text-green-600" />
            Level
          </div>
          <p className="text-2xl font-bold">{rewards.level}</p>
        </div>
      </div>

      {/* PROGRESS */}
      <ProgressBar value={progress} color="purple" />
      <p className="text-xs text-gray-500">
        {rewards.remaining} points to reach next level
      </p>

      {/* ACHIEVEMENTS */}
      <div>
        <p className="text-sm font-medium mb-2">Achievements</p>

        <div className="grid grid-cols-3 gap-3 text-xs text-center">
          <div className="border rounded-xl p-3 flex flex-col items-center gap-1">
            <FaGift className="text-indigo-600" />
            First Journey
          </div>

          <div className="border rounded-xl p-3 flex flex-col items-center gap-1">
            <FaStar className="text-yellow-500" />
            Early Bird
          </div>

          <div className="border rounded-xl p-3 flex flex-col items-center gap-1">
            <FaTrophy className="text-purple-600" />
            Explorer
          </div>
        </div>
      </div>

    </div>
  );
};

export default RewardsCard;
