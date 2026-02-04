const JourneyCard = ({ segment }) => {
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <div className="flex justify-between">
        <h4 className="font-semibold">{segment.mode}</h4>
        <span className="text-sm text-gray-500">{segment.duration}</span>
      </div>
      <p className="text-sm text-gray-600">
        {segment.from} → {segment.to}
      </p>
      {segment.status && (
        <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
          {segment.status}
        </span>
      )}
    </div>
  );
};

export default JourneyCard;
