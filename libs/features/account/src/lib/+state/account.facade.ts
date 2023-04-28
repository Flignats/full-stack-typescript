import { Injectable } from '@angular/core';
import { AccountPartialState, User } from '@full-stack-typescript/models';
import { select, Store } from '@ngrx/store';
import {
	loadAccount,
	updateAccount,
	updateAccountTokens
} from './account.actions';
import * as accountSelectors from './account.selectors';

@Injectable({ providedIn: 'root' })
export class AccountFacade {
	account$ = this.store.pipe(select(accountSelectors.getAccountState));
	error$ = this.store.pipe(select(accountSelectors.getAccountError));
	isLoaded$ = this.store.pipe(select(accountSelectors.getAccountIsLoaded));
	isLoading$ = this.store.pipe(select(accountSelectors.getAccountIsLoading));
	tokens$ = this.store.pipe(select(accountSelectors.getAccountTokens));

	constructor(private store: Store<AccountPartialState>) {}

	loadAccount() {
		this.store.dispatch(loadAccount());
	}

	updateAccount(account: User) {
		this.store.dispatch(updateAccount({ account }));
	}

	updateAccountTokens(token: string) {
		this.store.dispatch(updateAccountTokens({ token }));
	}
}
