import { FilterPriority, FilterStatus } from '..';

export interface TodoModel {
  name: string;
  id: string;
  prioriry: FilterPriority;
  status: FilterStatus;
}
