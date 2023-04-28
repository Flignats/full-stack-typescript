import { Injectable } from '@angular/core';
import { AuthenticateUser } from '@full-stack-typescript/models';
import { select, Store } from '@ngrx/store';
import { login, logout, register } from './auth.actions';
import * as fromAuth from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
	isAuthenticated$ = this.store.pipe(select(AuthSelectors.isAuthenticated));

	constructor(private store: Store<fromAuth.AuthState>) {}

	login(auth: AuthenticateUser) {
		this.store.dispatch(login({ auth }));
	}

	logout() {
		this.store.dispatch(logout());
	}

	submitUserRegistration(auth: AuthenticateUser) {
		this.store.dispatch(register({ auth }));
	}
}
