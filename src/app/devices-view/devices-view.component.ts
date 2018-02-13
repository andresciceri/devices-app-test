import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Device} from './device';
import {DeviceList} from '@app/devices-list';
import {DevicesViewService} from './devices-view.service';
import {LoginService} from '@app/login';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})
export class DevicesViewComponent implements OnInit {

	device: Device;

  constructor(private router: Router, private route: ActivatedRoute, 
  	private deviceService: DevicesViewService) {
  	this.device = new Device();
  	 }

  ngOnInit() {
  	this.route.params
    .switchMap((params: Params) => this.deviceService.getDevice(params['id']))
    .subscribe((data: any) => {
    	if(data){
    		this.device = data.data;	
    	}    	
    });
  }

}
