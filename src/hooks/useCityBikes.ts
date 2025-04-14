import { useQuery } from '@tanstack/react-query';
import { Network } from '../dto/network.dto';
import { Station } from '../dto/station.dto';

import { getCityBikeNetworks, getNetworkStations } from '../api/citybikes.ts';

export const useCityBikeNetworks = () =>
  useQuery<Network[], Error>({
    queryKey: ['networks-es'],
    queryFn: getCityBikeNetworks,
    staleTime: 5 * 60 * 1000, // 5 min cache
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });

export const useNetworkStations = (id: string) =>
  useQuery<Station[], Error>({
    queryKey: ['stations', id],
    queryFn: () => getNetworkStations(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000, // 2 minute cache
    gcTime: 5 * 60 * 1000,
    retry: 1,
  });
