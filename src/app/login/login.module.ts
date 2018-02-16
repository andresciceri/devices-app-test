import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './components/login.component';
import {AuthGuard, LoginService} from './services';
import {reducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const COMPONENTS = [LoginComponent];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: 'login', component: LoginComponent}]),
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class RootAuthModule {

}
