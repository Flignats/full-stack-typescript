import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { AccountFacade } from './+state/account.facade';

@Component({
	selector: 'full-stack-typescript-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent {
	private accountFacade = inject(AccountFacade);
	private breakpointFacade = inject(BreakpointFacade);

	account$ = this.accountFacade.account$;
	currentView$ = this.breakpointFacade.currentView$;
	githubURL = '';

	onUpdateAccount() {
		this.accountFacade.updateAccount({ githubURL: this.githubURL });
	}
}
