import { FilterPriority, FilterStatus, TodoModel } from '../models';
import { v4 as uuidv4 } from 'uuid';

const TodoList = [
  {
    id: '1',
    name: 'Learn React',
    prioriry: FilterPriority.High,
    status: FilterStatus.Completed,
  },
  {
    id: '2',
    name: 'Learn Redux',
    prioriry: FilterPriority.Medium,
    status: FilterStatus.Completed,
  },
  {
    id: '3',
    name: 'Learn JavaScript',
    prioriry: FilterPriority.Low,
    status: FilterStatus.Todo,
  },
] as TodoModel[];

export function fetchTodoList(): Promise<any> {
  return new Promise((resolve, _reject) => {
    // _reject('text error');
    setTimeout(() => {
      resolve({ data: TodoList });
    }, 300);
  });
}

export function putTodoList(item: TodoModel): Promise<any> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      item.id = uuidv4();
      resolve({ status: 'success', data: item });
    }, 200);
  });
}

export function patchTodoList(item: TodoModel): Promise<any> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ status: 'success' });
    }, 800);
  });
}
