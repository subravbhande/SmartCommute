const AlternativeCard = ({ option }) => {
  return (
    <div className="border rounded-lg p-4 bg-blue-50">
      <h4 className="font-medium">{option.title}</h4>
      <p className="text-sm text-gray-600">{option.saving}</p>
      <span className="text-xs text-blue-700">{option.risk}</span>
    </div>
  );
};

export default AlternativeCard;
