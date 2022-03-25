import { ActionType } from '../Actions';

export interface ActionModel<type> {
  type: ActionType;
  payload: type;
}
