import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AccountFacade } from '@full-stack-typescript/features/account';

@Injectable({ providedIn: 'root' })
export class AccountLoadedGuard implements Resolve<void> {
	constructor(private accountFacade: AccountFacade) {}

	public resolve(): void {
		this.accountFacade.loadAccount();
	}
}
