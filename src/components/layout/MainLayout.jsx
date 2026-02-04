import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIAssistant from "../widgets/AIAssitant";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>

      <Footer />

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
