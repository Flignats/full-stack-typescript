import { WEB3_FEATURE_KEY } from '@full-stack-typescript/constants';
import { Web3State } from './web3-state.interface';

export interface Web3PartialState {
	readonly [WEB3_FEATURE_KEY]: Web3State;
}
