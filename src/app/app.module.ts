import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

import { AppComponent } from './app.component';
import { DevicesListComponent,
         DevicesListService} from '@app/devices-list';
import { DevicesViewComponent,
         DevicesViewService } from '@app/devices-view';
import { LoginComponent, LoginService } from '@app/login';


@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    DevicesViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    DevicesListService,
    DevicesViewService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
