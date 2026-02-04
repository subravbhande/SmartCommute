import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

// Core pages
import Dashboard from "../pages/Dashboard";
import Planner from "../pages/Planner";
import JourneyTimeline from "../pages/JourneyTimeLine";
import LiveMonitoring from "../pages/LiveMonitoring";
import Insights from "../pages/Insights";
import WhyThisRoute from "../pages/whyThisRoute";
import Architecture from "../pages/Architecture";

// Utility pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        {/* App Entry */}
        <Route path="/" element={<Dashboard />} />

        {/* Core Features */}
        <Route path="/plan" element={<Planner />} />
        <Route path="/timeline" element={<JourneyTimeline />} />
        <Route path="/live" element={<LiveMonitoring />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/why-route" element={<WhyThisRoute />} />

        {/* Informational */}
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/home" element={<Home />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
