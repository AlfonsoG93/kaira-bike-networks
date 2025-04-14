import { api } from './client.ts';
import { Network } from '../dto/network.dto.ts';
import { Station } from '../dto/station.dto.ts';

export const getCityBikeNetworks = async (): Promise<Network[]> => {
  const response = await api.get<{ networks: Network[] }>('/networks');
  return response.data.networks.filter((n) => n.location.country === 'ES');
};

export const getNetworkStations = async (id: string): Promise<Station[]> => {
  const response = await api.get<{
    network: {
      stations: Station[];
    };
  }>(`/networks/${id}`);
  return response.data.network.stations;
};
