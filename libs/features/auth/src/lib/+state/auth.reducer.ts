import { User } from '@full-stack-typescript/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends User {
	error?: any;
	isAuthenticated: boolean;
	isPending: boolean;
}

export interface AuthPartialState {
	readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
	error: undefined,
	isAuthenticated: false,
	isPending: false,
	displayName: undefined,
	email: '',
	phoneNumber: undefined,
	photoURL: undefined,
	refreshToken: undefined,
	uid: ''
};

const reducer = createReducer(
	initialState,
	// Login & Register
	on(
		AuthActions.login,
		AuthActions.register,
		AuthActions.updateAuth,
		(state) => ({
			...state,
			isPending: true
		})
	),
	on(
		AuthActions.loginFailure,
		AuthActions.registerFailure,
		AuthActions.updateAuthFailure,
		(state, { error }) => ({
			...state,
			error,
			isPending: false
		})
	),
	on(
		AuthActions.loginSuccess,
		AuthActions.registerSuccess,
		AuthActions.updateAuthSuccess,
		(state, { authedUser }) => ({
			...state,
			...authedUser,
			isAuthenticated: true,
			isPending: false
		})
	),
	// Logout
	on(AuthActions.logout, () => ({
		...initialState
	}))
);

export function authReducer(state: AuthState | undefined, action: Action) {
	return reducer(state, action);
}
