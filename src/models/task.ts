export interface ITask {
  id: number;
  content: string;
  date: string;
  categoryId: number,
  state: string;
}

export interface IState {
  state: ["todo", "in progress", "done"];
}
