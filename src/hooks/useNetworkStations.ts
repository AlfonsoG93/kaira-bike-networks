import { useQuery } from '@tanstack/react-query';
import { Station } from '../dto/station.dto.ts';
import { getNetworkStations } from '../api/citybikes.ts';

export const useNetworkStations = (id: string) =>
  useQuery<Station[], Error>({
    queryKey: ['stations', id],
    queryFn: () => getNetworkStations(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000, // 2 minute cache
    gcTime: 5 * 60 * 1000,
    retry: 1,
  });
