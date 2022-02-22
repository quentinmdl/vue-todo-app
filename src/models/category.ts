import type { ITask } from '@/models/task';

export interface ICategory {
    id: Number,
    title: String,
    tasks: ITask
}