import { AuthenticateUser, User } from '@full-stack-typescript/models';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
	'[Auth] Login',
	props<{ auth: AuthenticateUser }>()
);

export const loginFailure = createAction(
	'[Auth] Login => Fail',
	props<{ error: any }>()
);

export const loginSuccess = createAction(
	'[Auth] Login => Success',
	props<{ authedUser: User }>()
);

export const logout = createAction('[Auth] Logout');

export const register = createAction(
	'[Auth] Register',
	props<{ auth: AuthenticateUser }>()
);

export const registerFailure = createAction(
	'[Auth] Register => Fail',
	props<{ error: any }>()
);

export const registerSuccess = createAction(
	'[Auth] Register => Success',
	props<{ authedUser: User }>()
);

export const resetPassword = createAction(
	'[Auth] ResetPassword',
	props<{ email: string }>()
);

export const updateAuth = createAction('[Auth] Update');

export const updateAuthFailure = createAction(
	'[Auth] Update => Fail',
	props<{ error: any }>()
);

export const updateAuthSuccess = createAction(
	'[Auth] Update => Success',
	props<{ authedUser: User }>()
);
