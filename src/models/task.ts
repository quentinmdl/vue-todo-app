export interface ITask {
    id: number,
    name: number,
    state: State
}

export interface State {
    State: ['todo', 'in progress', 'done']
}