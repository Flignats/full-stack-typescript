import { ACCOUNT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { AccountState } from '@full-stack-typescript/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Account' feature state managed by NgRx
export const getAccountState =
	createFeatureSelector<AccountState>(ACCOUNT_FEATURE_KEY);

export const getAccountError = createSelector(
	getAccountState,
	(state: AccountState) => state.error
);

export const getAccountIsLoaded = createSelector(
	getAccountState,
	(state: AccountState) => state.isLoaded
);

export const getAccountIsLoading = createSelector(
	getAccountState,
	(state: AccountState) => state.isLoading
);

export const getAccountTokens = createSelector(
	getAccountState,
	(state: AccountState) => state.fcmTokens
);
