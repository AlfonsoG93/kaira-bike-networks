import { useCityBikeNetworks } from '../hooks/useCityBikes.ts';
import NetworkCard from '../components/NetworkCard.tsx';
import { useTranslation } from 'react-i18next';

type Props = {
  onSelect: (id: string) => void;
};

const NetworksList = ({ onSelect }: Props) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useCityBikeNetworks();

  if (isLoading) return <p>{t('loading_networks')}</p>;
  if (isError) return <p>{t('error_networks')}</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((network) => (
        <NetworkCard
          key={network.id}
          name={network.name}
          company={network.company || [t('company_unknown')]}
          city={network.location.city}
          onClick={() => onSelect(network.id)}
        />
      ))}
    </div>
  );
};

export default NetworksList;
