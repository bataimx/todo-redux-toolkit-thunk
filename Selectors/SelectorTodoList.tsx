import { StoreModel, TodoModel } from '../models';

export const SelectorTodoList = (state: StoreModel): TodoModel[] =>
  state.TodoList;
