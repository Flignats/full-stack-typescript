import { Web3Balance } from './web3-balance.interface';

export interface Web3State {
	balance?: Web3Balance;
	error?: any;
	isLoadingBalance?: boolean;
}
