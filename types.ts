
export enum LogStatus {
  OPEN = 'OPEN',
  OK = 'OK',
  DEVIATION = 'DEVIATION'
}

export interface LogEntry {
  id: string;
  date: string;
  time: string;
  location: string;
  busId: string;
  driverId: string;
  diesel: number | null;
  adBlue: number | null;
  oil: number | null;
  status: LogStatus;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: 'driver' | 'admin';
}
