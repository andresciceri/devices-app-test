import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromRoot from '../../../redux/app.reducer';
import * as fromAuth from './auth';
import * as fromLogin from './login';

export interface AuthState {
    status: fromAuth.State;
    loginPage: fromLogin.State;
}

export interface State {
    auth: AuthState;
}

export const reducers = {
    status: fromAuth.reducer,
    loginPage: fromLogin.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
    selectAuthStatusState,
    fromAuth.getLoggedIn
);
export const getUser = createSelector(
    selectAuthStatusState,
    fromAuth.getUser
);
export const selectLoginPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.loginPage
  );
export const getLoginPageError = createSelector(
    selectLoginPageState,
    fromLogin.getError
);
export const getLoginPagePending = createSelector(
    selectLoginPageState,
    fromLogin.getPending
);