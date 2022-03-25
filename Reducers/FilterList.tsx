import { createReducer } from '@reduxjs/toolkit';
import { FilterActions } from '../Actions';
import {
  ActionModel,
  FilterListModel,
  FilterPriority,
  FilterStatus,
} from '../models';

const initFilterList = {
  search: '',
  status: FilterStatus.All,
  priority: [],
} as FilterListModel;

const FilterListReducer = createReducer(initFilterList, (builder) => {
  builder
    .addCase(
      FilterActions.ActionSearchFilterList.type,
      (state: FilterListModel, action: ActionModel<string>) => {
        state.search = action.payload;
      }
    )
    .addCase(
      FilterActions.ActionPriorityFilterList.type,
      (state: FilterListModel, action: ActionModel<FilterPriority[]>) => {
        state.priority = action.payload;
      }
    )
    .addCase(
      FilterActions.ActionStatusFilterList.type,
      (state: FilterListModel, action: ActionModel<FilterStatus>) => {
        state.status = action.payload;
      }
    );
});

export default FilterListReducer;
