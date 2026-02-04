import React from "react";
import { generatedJourney } from "../../data/generatedJourney";
import JourneySegment from "./JourneySegment";
import ProgressBar from "../comman/progressbar";

const GeneratedJourney = () => {
  const j = generatedJourney;

  return (
    <section className="mt-12 bg-white rounded-3xl shadow-xl p-8 animate-fadeIn">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            Generated Journey
          </h3>
          <p className="text-sm text-gray-500">
            {j.from} → {j.to}
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <div>
            <p className="text-gray-500">Total Time</p>
            <p className="font-semibold">{j.totalTime}</p>
          </div>
          <div>
            <p className="text-gray-500">Estimated Cost</p>
            <p className="font-semibold">{j.totalCost}</p>
          </div>
        </div>
      </div>

      {/* SEGMENTS */}
      <div className="space-y-4">
        {j.segments.map((s, i) => (
          <JourneySegment key={i} segment={s} />
        ))}
      </div>

      {/* AI CONFIDENCE */}
      <div className="mt-8 bg-indigo-50 rounded-2xl p-5">
        <p className="text-sm font-medium">
          AI Confidence: {j.confidence}%
        </p>
        <ProgressBar value={j.confidence} color="green" />

        <p className="text-xs text-gray-600 mt-2">
          Risk Level: {j.riskLevel}
        </p>
      </div>

      {/* FALLBACK */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
        <p className="font-semibold text-sm">
          Fallback Ready
        </p>
        <p className="text-sm text-gray-600 mt-1">
          {j.fallback.reason}
        </p>
        <p className="text-sm font-medium mt-2">
          Suggested: {j.fallback.option}
        </p>
        <p className="text-xs text-gray-500">
          Updated ETA: {j.fallback.newETA}
        </p>
      </div>

    </section>
  );
};

export default GeneratedJourney;
