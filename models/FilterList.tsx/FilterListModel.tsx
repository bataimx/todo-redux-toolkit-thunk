export enum FilterStatus {
  All = 'All',
  Completed = 'Completed',
  Todo = 'Todo',
}
export enum FilterPriority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export class FilterListModel {
  search: string = '';
  status: FilterStatus = FilterStatus.All;
  priority: FilterPriority[] = [];
}
