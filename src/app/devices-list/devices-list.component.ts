import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Device} from '@app/devices-view';
import {DeviceList} from './device-list';
import {DevicesListService} from './devices-list.service';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

	devices: Device[];
	deviceSelected: Device;
  gridView: boolean;
	page: number;
	limit: number;
	total: number;

  constructor(private router: Router, private route: ActivatedRoute, 
  	private listService: DevicesListService) { 
  	this.devices = [];
  	this.limit = 2;
    this.gridView = false;
  }

  ngOnInit() {

  }

  changeView (){
    this.gridView = !this.gridView;
  }

  loadDeviceLazy(event: LazyLoadEvent) { 
  	let pag = (event.first / event.rows) + 1;
  	this.listService.getDevicesList(pag,this.limit)
  	.subscribe((list: DeviceList) => {
  		this.devices = list.data;
  		this.total = list._links.total;  		
  	});
  }

  onRowSelect(event) {    
    this.router.navigate(['/devices-view', event.data._id]);
  }

  paginate(event) {
    console.log(event);
    let pag = event.page + 1;
    this.listService.getDevicesList(pag,this.limit)
    .subscribe((list: DeviceList) => {
      this.devices = list.data;
      this.total = list._links.total;      
    });
  }

}
