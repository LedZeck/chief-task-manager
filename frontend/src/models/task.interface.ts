export interface Task {
  id?: number;
  title: string;
  description: string;
  complete: boolean;
}

export interface TaskPayload {
  title: string;
  description: string;
}
