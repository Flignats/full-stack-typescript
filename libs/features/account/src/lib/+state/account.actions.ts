import { User } from '@full-stack-typescript/models';
import { createAction, props } from '@ngrx/store';

export const loadAccount = createAction('[Account] Load account');

export const loadAccountSuccess = createAction(
	'[Account] Load account Success',
	props<{ account: User }>()
);

export const loadAccountFailure = createAction(
	'[Account] Load account Failure',
	props<{ error: any }>()
);

export const updateAccount = createAction(
	'[Account] Update account',
	props<{ account: User }>()
);

export const updateAccountFailure = createAction(
	'[Account] Update account Failure',
	props<{ error: any }>()
);

export const updateAccountSuccess = createAction(
	'[Account] Update account Success'
);

export const updateAccountTokens = createAction(
	'[Account] Update account tokens',
	props<{ token: string }>()
);

export const updateAccountTokensFailure = createAction(
	'[Account] Update account tokens Failure',
	props<{ error: any }>()
);

export const updateAccountTokensSuccess = createAction(
	'[Account] Update account tokens Success'
);
