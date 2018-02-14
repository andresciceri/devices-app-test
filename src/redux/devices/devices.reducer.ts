import { Device } from '@app/devices-view';
import * as DevicesActions from './devices.actions';

const initialState: Device[] = [];

export function DevicesReducer(state: Device[] = initialState, action: DevicesActions.DevicesActionType){
	switch (action.type) {
		case DevicesActions.LIST_DEVICE: {
	      return action.devices;
	    }
	    default: {
	      return state;
	    }
	}
}