export type Network = {
  id: string;
  name: string;
  company?: string[];
  href: string;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
};
