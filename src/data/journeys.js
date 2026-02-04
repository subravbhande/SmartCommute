export const plannedJourney = {
  source: "Andheri East",
  destination: "COEP Pune",
  totalTime: "2h 45m",
  buffer: "15 min",
  segments: [
    {
      mode: "Walk",
      from: "Home",
      to: "Metro Station",
      duration: "8 min",
    },
    {
      mode: "Metro",
      from: "Andheri East",
      to: "Ghatkopar",
      duration: "18 min",
      status: "On time",
    },
    {
      mode: "Local Train",
      from: "Dadar",
      to: "Pune",
      duration: "2h 10m",
      status: "5 min delay",
    },
    {
      mode: "Auto",
      from: "Pune Station",
      to: "COEP",
      duration: "9 min",
    },
  ],
  alternatives: [
    {
      title: "Fast Train + Cab",
      saving: "12 min faster",
      risk: "Medium crowd",
    },
    {
      title: "Express Bus",
      saving: "Safer option",
      risk: "Low crowd",
    },
  ],
};
