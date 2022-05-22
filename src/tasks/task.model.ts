export class Task {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export enum Status {
  OPEN = 'OPEN',
  PROCESSING = 'PROCESSING',
  CLOSE = 'CLOSE',
}
