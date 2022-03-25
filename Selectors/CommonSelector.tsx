import { createSelector } from '@reduxjs/toolkit';
import { FilterPriority, FilterStatus, TodoModel } from '../models';
import {
  SelectorSearchFilterList,
  SelectorPriorityFilterList,
  SelectorStatusFilterList,
  SelectorTodoList,
} from '../Selectors';

export const SelectorFilterTodoList = createSelector(
  SelectorTodoList,
  SelectorSearchFilterList,
  SelectorPriorityFilterList,
  SelectorStatusFilterList,
  (
    TodoList: TodoModel[],
    FilterSearch: String,
    FilterPriority: FilterPriority[],
    FilterStatus: FilterStatus
  ) => {
    const lowerCaseKeyword = FilterSearch.toLowerCase();

    return TodoList.filter((item) => {
      const matchKeyword =
        lowerCaseKeyword.length == 0 ||
        (item.name && item.name.toLowerCase().includes(lowerCaseKeyword));
      const matchPriority =
        FilterPriority.length == 0 ||
        (item.prioriry && FilterPriority.includes(item.prioriry));
      const matchStatus =
        FilterStatus === 'All' || (item.status && item.status === FilterStatus);
      return matchKeyword && matchPriority && matchStatus;
    });
  }
);
