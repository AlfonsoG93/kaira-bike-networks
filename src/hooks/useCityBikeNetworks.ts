import { useQuery } from '@tanstack/react-query';
import { Network } from '../dto/network.dto';
import { getCityBikeNetworks } from '../api/citybikes.ts';

export const useCityBikeNetworks = () =>
  useQuery<Network[], Error>({
    queryKey: ['networks-es'],
    queryFn: getCityBikeNetworks,
    staleTime: 5 * 60 * 1000, // 5 min cache
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });
