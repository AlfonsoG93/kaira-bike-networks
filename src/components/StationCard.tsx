import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

type Props = {
  name: string;
  lat: number;
  lon: number;
  freeBikes: number;
  emptySlots: number;
  timestamp: string;
};

const getAvailability = (free: number, t: TFunction) => {
  if (free === 0) return t('low');
  if (free < 5) return t('medium');
  return t('high');
};

const timeAgo = (iso: string, t: TFunction) => {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 60000); // minutes
  return diff < 60
    ? t('time_minutes_ago', { count: diff })
    : t('time_hours_ago', { count: Math.floor(diff / 60) });
};

const StationCard = ({
  name,
  lat,
  lon,
  freeBikes,
  emptySlots,
  timestamp,
}: Props) => {
  const { t } = useTranslation();

  const availability = getAvailability(freeBikes, t);
  const time = timeAgo(timestamp, t);

  const color =
    availability === t('high')
      ? 'text-green-600'
      : availability === t('medium')
        ? 'text-yellow-600'
        : 'text-red-600';

  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all space-y-1">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <span className={`text-xs font-semibold ${color}`}>{availability}</span>
      </div>
      <p className="text-xs text-gray-600">
        🚲 {t('free_bikes')}: {freeBikes}
      </p>
      <p className="text-xs text-gray-600">
        📍 {t('empty_slots')}: {emptySlots}
      </p>
      <p className="text-xs text-gray-400 italic">{time}</p>
      <a
        href={`https://maps.google.com/?q=${lat},${lon}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-blue-600 hover:underline"
      >
        {t('view_on_map')}
      </a>
    </div>
  );
};

export default StationCard;
