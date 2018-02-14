import { Action } from '@ngrx/store';
import { Device } from '@app/devices-view';

export const LIST_DEVICE = '[DEVICES] list';
export const LIST_ALL_DEVICE = '[DEVICES] list load success';
export const SELECT_DEVICE = '[DEVICES] select';
export const DATA_VIEW_DEVICE = '[DEVICES] view mode';

export class ListDeviceAction implements Action {
	readonly type = LIST_DEVICE;
	/*
	constructor (public payload: {page: number, limit: number}){
	}**/
	constructor (public devices: Device[]){
	}
}

export class LoadDevicesSuccess implements Action {
  readonly type = LIST_ALL_DEVICE;
  
  constructor(public payload: Device[]) {}
}

export type DevicesActionType =
| ListDeviceAction 
| LoadDevicesSuccess;