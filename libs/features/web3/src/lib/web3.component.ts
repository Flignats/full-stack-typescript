import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { Web3Facade } from './+state/web3.facade';

@Component({
	selector: 'full-stack-typescript-web3',
	templateUrl: './web3.component.html',
	styleUrls: ['./web3.component.scss']
})
export class Web3Component {
	private breakpointFacade = inject(BreakpointFacade);
	private web3Facade = inject(Web3Facade);

	balance$ = this.web3Facade.balance$;
	currentView$ = this.breakpointFacade.currentView$;
	isLoadingBalance$ = this.web3Facade.isLoadingBalance$;

	onGetBalance(address: string) {
		this.web3Facade.loadBalance(address);
	}
}
