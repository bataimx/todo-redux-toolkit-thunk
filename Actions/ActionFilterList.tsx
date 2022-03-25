import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../Actions';
import { FilterPriority, FilterStatus } from '../models';

const ActionSearchFilterList = createAction<string>(
  ActionType.SearchFilterList
);
const ActionPriorityFilterList = createAction<FilterPriority[]>(
  ActionType.PriorityFilterList
);
const ActionStatusFilterList = createAction<FilterStatus>(
  ActionType.StatusFilterList
);

export const FilterActions = {
  ActionSearchFilterList,
  ActionPriorityFilterList,
  ActionStatusFilterList,
};
