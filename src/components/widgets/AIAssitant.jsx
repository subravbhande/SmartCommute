import React, { useState } from "react";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I’m SmartCommute AI. I help you understand delays, predict risks, and find safer routes.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "ai",
        text:
          "Based on current data, your delay is likely due to peak-hour congestion. I recommend adding a 10-minute buffer or switching to an express bus.",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Launcher */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-br from-indigo-600 to-purple-600
        shadow-2xl flex items-center justify-center
        hover:scale-105 transition"
        aria-label="Open AI Assistant"
      >
        {/* AI Logo */}
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
          AI
        </div>
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50
          w-[360px] max-w-[92vw]
          bg-white rounded-2xl shadow-2xl border
          overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3
            bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                AI
              </div>
              <div>
                <p className="font-semibold leading-tight">SmartCommute AI</p>
                <p className="text-xs text-indigo-100">
                  Online • Predictive Mode
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 h-72 overflow-y-auto bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm px-4 py-2 rounded-2xl leading-relaxed ${
                  msg.role === "ai"
                    ? "bg-white border text-gray-700"
                    : "bg-indigo-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Quick Prompts */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Why is my route delayed?",
                "Is there a safer option?",
                "Optimize my journey",
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="text-xs px-3 py-1 rounded-full
                  bg-indigo-100 text-indigo-700
                  hover:bg-indigo-200 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about your journey…"
              className="flex-1 border rounded-xl px-3 py-2 text-sm
              focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-4 rounded-xl
              bg-indigo-600 text-white text-sm
              hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
