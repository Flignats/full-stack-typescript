import { AccountState } from '@full-stack-typescript/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as accountActions from './account.actions';

export const initialState: AccountState = {
	email: '',
	error: null,
	isLoaded: false,
	isLoading: false,
	uid: ''
};

const accountReducer = createReducer(
	initialState,
	on(accountActions.loadAccount, (state) => ({
		...state,
		isLoading: true
	})),
	on(
		accountActions.loadAccountFailure,
		accountActions.updateAccountFailure,
		accountActions.updateAccountTokensFailure,
		(state, { error }) => ({
			...state,
			error,
			isLoaded: false,
			isLoading: false
		})
	),
	on(accountActions.loadAccountSuccess, (state, { account }) => ({
		...state,
		...account,
		error: null,
		isLoaded: true,
		isLoading: false
	})),
	on(accountActions.updateAccount, (state) => ({
		...state,
		isLoading: true
	})),
	on(accountActions.updateAccountSuccess, (state) => ({
		...state,
		error: null,
		isLoaded: false
	}))
);

export function reducer(state: AccountState | undefined, action: Action) {
	return accountReducer(state, action);
}
