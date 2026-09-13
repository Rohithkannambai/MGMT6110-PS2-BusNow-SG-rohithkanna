/**
 * Data types for BUSNOW SG
 */

export interface BusStop {
  id: string;
  name: string;
  code: string;
}

export interface BusServiceArrival {
  service: string;
  arrivals: string[];
}

export interface BusApiResponse {
  stop: string;
  services: BusServiceArrival[];
  fetchedAt: string;
}

export type FetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: BusApiResponse }
  | { status: 'empty'; fetchedAt?: string }
  | { status: 'refused' }
  | { status: 'unreachable' }
  | { status: 'configuration'; message: string };

export const BUS_STOPS: BusStop[] = [
  {
    id: '1',
    name: 'SMU',
    code: '04121',
  },
  {
    id: '2',
    name: 'Aft Bras Basah Stn Exit A',
    code: '04179',
  },
  {
    id: '3',
    name: 'Cath of The Good Shepherd',
    code: '04151',
  },
  {
    id: '4',
    name: 'YMCA',
    code: '08041',
  },
  {
    id: '5',
    name: 'Bencoolen Stn Exit B',
    code: '08069',
  },
];
