import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, AuthGuard } from '@app/login/';
import { DevicesListComponent} from '@app/devices-list';
import { DevicesViewComponent} from '@app/devices-view';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
  	path: 'devices-list',
  	component: DevicesListComponent,
    canActivate: [AuthGuard]
  },
  {
  	path: 'devices-viw/:id',
  	component: DevicesViewComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '',
    redirectTo: 'devices-list',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'devices-list' }];

  @NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }