import { Injectable } from '@angular/core';
import { Web3PartialState } from '@full-stack-typescript/models';
import { select, Store } from '@ngrx/store';
import { loadBalance } from './web3.actions';
import * as web3Selectors from './web3.selectors';

@Injectable({ providedIn: 'root' })
export class Web3Facade {
	balance$ = this.store.pipe(select(web3Selectors.getBalance));
	error$ = this.store.pipe(select(web3Selectors.getWeb3Error));
	isLoadingBalance$ = this.store.pipe(
		select(web3Selectors.getIsLoadingBalance)
	);

	constructor(private store: Store<Web3PartialState>) {}

	loadBalance(address: string) {
		this.store.dispatch(loadBalance({ address }));
	}
}
