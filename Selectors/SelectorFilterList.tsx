import { FilterPriority, FilterStatus, StoreModel } from '../models';

export const SelectorSearchFilterList = (state: StoreModel): string =>
  state.FilterList.search;
export const SelectorPriorityFilterList = (
  state: StoreModel
): FilterPriority[] => state.FilterList.priority;
export const SelectorStatusFilterList = (state: StoreModel): FilterStatus =>
  state.FilterList.status;
