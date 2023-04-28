import { Web3State } from '@full-stack-typescript/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as web3Actions from './web3.actions';

export const initialState: Web3State = {
	error: null,
	isLoadingBalance: false
};

const web3Reducer = createReducer(
	initialState,
	on(web3Actions.loadBalance, (state) => ({
		...state,
		isLoadingBalance: true
	})),
	on(web3Actions.loadBalanceFailure, (state, { error }) => ({
		...state,
		error,
		isLoadingBalance: false
	})),
	on(web3Actions.loadBalanceSuccess, (state, { balance }) => ({
		...state,
		balance,
		error: null,
		isLoadingBalance: false
	}))
);

export function reducer(state: Web3State | undefined, action: Action) {
	return web3Reducer(state, action);
}
