import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as devicesActions from './devices.actions';
import {Actions, Effect} from '@ngrx/effects';
import { DevicesListService } from '@app/devices-list';
import { Device } from '@app/devices-view';
import 'rxjs/Rx';

@Injectable()
export class DevicesEffects {
    constructor(private actions$: Actions,private devicesListServices: DevicesListService) {}

    @Effect()
    loadDevices$: Observable<Action> = this.actions$
        .ofType(devicesActions.LIST_DEVICE)
        .startWith(new devicesActions.ListDeviceAction())
        .switchMap((payload) =>
            this.devicesListServices.getDevicesList(payload.page, payload.limit)
                .map((devices: Device[]) => new devicesActions.LoadDevicesSuccess(devices))
        );
}