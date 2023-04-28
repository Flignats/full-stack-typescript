import { Web3Balance } from '@full-stack-typescript/models';
import { createAction, props } from '@ngrx/store';

export const loadBalance = createAction(
	'[Web3] Load balance',
	props<{ address: string }>()
);

export const loadBalanceSuccess = createAction(
	'[Web3] Load balance Success',
	props<{ balance: Web3Balance }>()
);

export const loadBalanceFailure = createAction(
	'[Web3] Load balance Failure',
	props<{ error: any }>()
);
