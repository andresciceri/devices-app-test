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
import { LoginComponent, LoginService, AuthGuard } from '@app/login';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    DevicesViewComponent,
    LoginComponent,
    ProfileUserComponent,
    MainComponent
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
    AuthGuard,
    DevicesListService,
    DevicesViewService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
