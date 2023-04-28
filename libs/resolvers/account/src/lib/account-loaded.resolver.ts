import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AccountFacade } from '@full-stack-typescript/features/account';

export const accountLoadedResolver: ResolveFn<void> = () => {
	return inject(AccountFacade).loadAccount();
};
