export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskMutation = Omit<Task, 'id'>

export interface ListTask {
  [id: string]: Task
}