import { Action } from '@ngrx/store';
import { Device } from '@app/devices-view';

export const LIST_DEVICE = '[DEVICES] list';
export const SELECT_DEVICE = '[DEVICES] select';
export const DATA_VIEW_DEVICE = '[DEVICES] view mode';

export class ListDeviceAction implements Action {
	readonly type = LIST_DEVICE;
	constructor (public devices: Device[]){

	}
} 

export type DevicesActionType =
ListDeviceAction;