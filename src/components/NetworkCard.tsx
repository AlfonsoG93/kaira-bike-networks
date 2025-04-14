type Props = {
  name: string;
  company: string[];
  city: string;
  onClick: () => void;
};

const NetworkCard = ({ name, company, city, onClick }: Props) => (
  <div
    className="rounded-lg bg-white p-4 border border-gray-200 shadow-sm hover:shadow-md transition"
    onClick={onClick}
  >
    <h2 className="text-base font-semibold text-gray-800 mb-1">{name}</h2>
    <p className="text-sm text-gray-500 truncate">{company.join(', ')}</p>
    <p className="text-xs text-gray-400 italic">{city}</p>
  </div>
);

export default NetworkCard;
