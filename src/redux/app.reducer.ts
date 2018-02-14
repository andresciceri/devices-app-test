import { ActionReducerMap } from '@ngrx/store';
import { DevicesReducer } from './devices/devices.reducer';
import { Device } from '@app/devices-view';

export interface AppState {
  devices: Device[]  
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: DevicesReducer  
};