import {AuthActions, AuthActionTypes} from '../actions/auth';
import {DataUser} from '../models/data-user';
import { state } from '@angular/core';

export interface State {
    loggedIn: boolean;
    user: DataUser | null;
};

export const initialState: State = {
    loggedIn: false,
    user: null
};

export function reducer (state = initialState, action: AuthActions) : State {
    switch(action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            };
        }

        case AuthActionTypes.Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;