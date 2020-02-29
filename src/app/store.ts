import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';
import { combineReducers } from 'redux';

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
};

// export function rootReducer(state: IAppState, action): IAppState {
//   return state;
// }
export const rootReducer = combineReducers({
  tasking: taskingReducer,
  messaging: messagingReducer
});
