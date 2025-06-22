export interface Task {
  id: number;
  description: string;
  completed: boolean;
  editing?: boolean;
}

export interface TodoList {
  id: number;
  name: string;
  tasks: Task[];
  newTask?: string;
}
