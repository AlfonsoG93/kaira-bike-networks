import { useState } from 'react';
import { useNetworkStations } from '../hooks/useCityBikes';
import StationCard from '../components/StationCard';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Props = {
  networkId: string;
};

const StationsList = ({ networkId }: Props) => {
  const { t } = useTranslation();
  const { data: stations, isLoading, isError } = useNetworkStations(networkId);
  const [orderDirection, setOrderDirection] = useState<'desc' | 'asc'>('desc');

  if (isLoading) return <p className="text-center">{t('loading_stations')}</p>;
  if (isError || !stations)
    return <p className="text-center text-red-500">{t('error_stations')}</p>;

  const sortedStations = [...stations].sort((a, b) => {
    return orderDirection === 'desc'
      ? b.free_bikes - a.free_bikes
      : a.free_bikes - b.free_bikes;
  });

  const toggleOrder = () =>
    setOrderDirection((prev) => (prev === 'desc' ? 'asc' : 'desc'));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-gray-600">
          {t('showing_stations', { count: sortedStations.length })}
        </p>

        <button
          onClick={toggleOrder}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition inline-flex items-center gap-2"
        >
          {orderDirection === 'desc' ? (
            <>
              {t('higher_to_lower')} <ArrowDown className="w-4 h-4" />
            </>
          ) : (
            <>
              {t('lower_to_higher')} <ArrowUp className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedStations.map((station) => (
          <StationCard
            key={station.id}
            name={station.name}
            lat={station.latitude}
            lon={station.longitude}
            freeBikes={station.free_bikes}
            emptySlots={station.empty_slots}
            timestamp={station.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default StationsList;
