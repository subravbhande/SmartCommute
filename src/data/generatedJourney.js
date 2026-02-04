export const generatedJourney = {
  from: "Andheri East",
  to: "COEP Pune",
  totalTime: "2h 45m",
  totalCost: "₹420",
  confidence: 91,
  riskLevel: "Medium",

  segments: [
    {
      mode: "Walk",
      from: "Home",
      to: "Metro Station",
      time: "8 min",
      cost: "Free",
      status: "On time",
    },
    {
      mode: "Metro",
      from: "Andheri East",
      to: "Ghatkopar",
      time: "18 min",
      cost: "₹30",
      status: "On time",
    },
    {
      mode: "Local Train",
      from: "Dadar",
      to: "Pune",
      time: "2h 10m",
      cost: "₹120",
      status: "5 min delay",
    },
    {
      mode: "Cab",
      from: "Pune Station",
      to: "COEP",
      time: "9 min",
      cost: "₹270",
      status: "Available",
    },
  ],

  fallback: {
    reason: "Train delay exceeds buffer",
    option: "Switch to Express Bus",
    newETA: "3h 05m",
  },
};
