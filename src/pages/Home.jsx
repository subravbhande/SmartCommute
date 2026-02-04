import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mt-20 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-6">
          Your commute, planned as one journey
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          A unified platform for trains, buses, metros and last-mile travel.
          Built for modern urban commuters.
        </p>

        <Link
          to="/plan"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Try Demo Planner
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-24">
        {[
          { title: "Multi-Modal Planning", value: "4 Transport Types" },
          { title: "Average Time Saved", value: "18 mins/day" },
          { title: "Delay Prediction Accuracy", value: "92%" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-2xl font-bold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
