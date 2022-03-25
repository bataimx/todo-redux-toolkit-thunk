import { createReducer } from '@reduxjs/toolkit';
import { TodoListActions } from '../Actions';
import { ActionModel, TodoModel } from '../models';

const initTodoList: TodoModel[] = [];

const TodoListReducer = createReducer(initTodoList, {
  [TodoListActions.ActionAddTodoList.type]: (
    state: TodoModel[],
    action: ActionModel<TodoModel>
  ) => {
    const todo = action.payload;
    state.push(todo);
  },
  [TodoListActions.ActionUpdateTodoList.type]: (
    state: TodoModel[],
    action: ActionModel<TodoModel>
  ) => {
    const { id: todoId, status: todoStatus } = action.payload;
    const item = state.find((item) => item.id === todoId);
    if (item) {
      item.status = todoStatus;
    }
  },
  [TodoListActions.AsyncActionFetchTodo.fulfilled.toString()]: (
    state: TodoModel[],
    action: ActionModel<TodoModel[]>
  ) => {
    const payload = action.payload;
    state.push(...payload);
  },
  [TodoListActions.AsyncActionFetchTodo.rejected.toString()]: (
    state: TodoModel[],
    action: any
  ) => {
    console.log(action, 'rejected...');
  },
  [TodoListActions.AsyncActionPutTodo.fulfilled.toString()]: (
    state: TodoModel[],
    action: ActionModel<TodoModel[]>
  ) => {
    const todo = action.payload;
    state.push(...todo);
  },
  [TodoListActions.AsyncActionPatchTodo.fulfilled.toString()]: (
    state: TodoModel[],
    action: ActionModel<TodoModel>
  ) => {
    const { id: todoId, status: todoStatus } = action.payload;
    const item = state.find((item) => item.id === todoId);
    if (item) {
      item.status = todoStatus;
    }
  },
});

export default TodoListReducer;
