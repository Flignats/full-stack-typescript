import { WEB3_FEATURE_KEY } from '@full-stack-typescript/constants';
import { Web3State } from '@full-stack-typescript/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Web3' feature state managed by NgRx
export const getWeb3State = createFeatureSelector<Web3State>(WEB3_FEATURE_KEY);

export const getBalance = createSelector(
	getWeb3State,
	(state: Web3State) => state.balance
);

export const getIsLoadingBalance = createSelector(
	getWeb3State,
	(state: Web3State) => state.isLoadingBalance
);

export const getWeb3Error = createSelector(
	getWeb3State,
	(state: Web3State) => state.error
);
