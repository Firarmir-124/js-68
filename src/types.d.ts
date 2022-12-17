export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskMutation {
  title: string;
  completed: boolean;
}

export interface ListTask {
  [id: string]: Task
}