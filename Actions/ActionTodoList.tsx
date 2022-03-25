import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from '../Actions';
import {
  fetchTodoList,
  patchTodoList,
  putTodoList,
} from '../api/fetchTodoList';
import { TodoModel } from '../models';

const ActionAddTodoList = createAction<TodoModel>(ActionType.AddTodoList);
const ActionUpdateTodoList = createAction<TodoModel>(ActionType.UpdateTodoList);

const AsyncActionFetchTodo = createAsyncThunk<any, undefined>(
  ActionType.FetchTodoList,
  async (_param) => {
    const response = await fetchTodoList();
    console.log(`Action ${ActionType.FetchTodoList}`, response);
    return response.data;
  }
);

const AsyncActionPutTodo = createAsyncThunk<any, TodoModel>(
  ActionType.PutTodoList,
  async (item) => {
    const response = await putTodoList(item);
    console.log(`Action ${ActionType.PutTodoList}`, response);
    return response.status === 'success' ? [response.data] : [];
  }
);

const AsyncActionPatchTodo = createAsyncThunk<any, TodoModel>(
  ActionType.PatchTodoList,
  async (item, ...params) => {
    console.log('params', params);
    const response = await patchTodoList(item);
    console.log(`Action ${ActionType.PatchTodoList}`, response);
    return response.status === 'success' ? item : {};
  }
);

export const TodoListActions = {
  ActionAddTodoList,
  ActionUpdateTodoList,
  AsyncActionFetchTodo,
  AsyncActionPutTodo,
  AsyncActionPatchTodo,
};
