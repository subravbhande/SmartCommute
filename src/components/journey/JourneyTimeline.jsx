import JourneyCard from "./JourneyCard";

const JourneyTimeline = ({ journey }) => {
  return (
    <div className="space-y-4">
      {journey.map((segment, index) => (
        <JourneyCard key={index} segment={segment} />
      ))}
    </div>
  );
};

export default JourneyTimeline;
