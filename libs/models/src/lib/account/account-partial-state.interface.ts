import { ACCOUNT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { AccountState } from './account-state.interface';

export interface AccountPartialState {
	readonly [ACCOUNT_FEATURE_KEY]: AccountState;
}
