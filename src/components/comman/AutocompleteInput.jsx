import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

/* TEMP DUMMY DATA — will be replaced by Google Places API */
const PLACES = [
  "Mumbai",
  "Mumbai Central",
  "Mumbra",
  "Mulund",
  "Andheri East",
  "Andheri West",
  "Dadar",
  "Pune",
  "Pune Junction",
  "Shivajinagar",
  "COEP Pune",
];

const AutocompleteInput = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions =
    query.length > 1
      ? PLACES.filter((p) =>
          p.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="relative w-full">
      {/* INPUT */}
      <div
        className="flex items-center gap-2 border rounded-2xl px-4 h-14 bg-white
        focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200
        transition"
      >
        <FaMapMarkerAlt className="text-indigo-500 text-sm shrink-0" />

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full h-full outline-none text-sm text-gray-800 placeholder-gray-400"
        />
      </div>

      {/* SUGGESTIONS (Google-style) */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          className="absolute z-30 mt-1 w-full bg-white rounded-xl shadow-lg border overflow-hidden"
          onMouseDown={(e) => e.preventDefault()} // IMPORTANT
        >
          {suggestions.map((place, i) => (
            <div
              key={i}
              onClick={() => {
                setQuery(place);
                setShowSuggestions(false);
              }}
              className="px-4 py-3 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2"
            >
              <FaMapMarkerAlt className="text-gray-400 text-xs" />
              <span>{place}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
