import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const PLACES = [
  "Mumbai",
  "Mumbra",
  "Mulund",
  "Andheri East",
  "Andheri West",
  "Dadar",
  "Pune",
  "Shivajinagar",
  "COEP Pune",
];

const AutocompleteInput = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = PLACES.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {/* Input wrapper */}
      <div className="flex items-center gap-2 border rounded-2xl px-4 h-14
        focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200
        transition bg-white"
      >
        {/* Icon */}
        <FaMapMarkerAlt className="text-indigo-500 text-base shrink-0" />

        {/* Input */}
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={placeholder}
          className="w-full h-full outline-none text-sm text-gray-800 placeholder-gray-400"
        />
      </div>

      {/* Suggestions */}
      {open && query && (
        <div className="absolute z-30 mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden">
          {filtered.length ? (
            filtered.map((p, i) => (
              <div
                key={i}
                onClick={() => {
                  setQuery(p);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm cursor-pointer hover:bg-indigo-50"
              >
                {p}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-400">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
