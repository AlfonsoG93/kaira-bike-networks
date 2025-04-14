export type Station = {
  id: string;
  name: string;
  empty_slots: number;
  free_bikes: number;
  latitude: number;
  longitude: number;
  timestamp: string;
  extra?: Record<string, unknown>;
};
