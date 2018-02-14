import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import { rootReducer } from '@app/redux/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

import { DataTableModule, PaginatorModule} from 'primeng/primeng';
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
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),    
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([]),    
    DataTableModule,
    PaginatorModule
  ],
  providers: [
    AuthGuard,
    DevicesListService,
    DevicesViewService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
