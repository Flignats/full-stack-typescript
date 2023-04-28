import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-web3-example',
	standalone: true,
	imports: [CommonModule, HighlightModule, RouterModule],
	templateUrl: './documentation-web3-example.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationWeb3ExampleComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;

	componentCode = `
	import { Component } from '@angular/core';
	import { MoralisService } from '@full-stack-typescript/services/moralis';
	
	@Component({
		selector: 'full-stack-typescript-web3',
		templateUrl: './web3.component.html',
		styleUrls: ['./web3.component.scss'],
	})
	export class Web3Component {
	
		balance$ = this.moralisService.getBalance();
	
		constructor(private moralisService: MoralisService) {}
	
		onGetBalance() {
	
			// noop
	
		}
	
	}	
	`;
	componentTemplateCode = `
<div class="view-web3">
    <h1>Web3</h1>
    <button mat-raised-button color="primary" (click)="onGetBalance()">Get balance</button>

    <div>
        <h2>Balance details</h2>
        <div *ngIf="balance$ | async as balance">
            {{ balance.balance }}
        </div>
    </div>
</div>
	`;
	installMoralisCommand = `npm i moralis`;
	installMoralisCommonCommand = `npm i @moralisweb3/common-evm-utils`;
	functionBuildCommand = `nx build full-stack-typescript-api`;
	functionCode = `
	import { EvmChain } from '@moralisweb3/common-evm-utils';
	import Moralis from 'moralis';
	
	Moralis.start({
		apiKey: "{{ Your API key }}",
	});
	
	export async function onGetBalance(data: any, context) {
	
		const result = await Moralis.EvmApi.balance.getNativeBalance({
			chain: EvmChain.ETHEREUM,
			address: data.address,
		});
	
		return {
			balance: result.result.balance.ether
		};
	
	};	
	`;
	functionDeployCommand = `firebase deploy --only functions`;
	functionFiles = `
functions
	- moralis
		- index.ts
	`;
	functionMainCode = `
	import * as moralisFunctions from './functions/moralis';

	...
	
	// Moralis
	export const onGetBalance = functions.https.onCall((data, context) => {
		return moralisFunctions.onGetBalance (data, context);
	});
	`;
	packageJsonCode = `
	{
		...
		"dependencies": {
			...
			"@moralisweb3/common-evm-utils": "^2.14.3",
			...
			"moralis": "^2.14.3",
			...
		}
	}
	`;
	serviceCode = `
	import { Injectable } from '@angular/core';
	import { AngularFireFunctions } from '@angular/fire/compat/functions';
	
	@Injectable({
		providedIn: 'root'
	})
	export class MoralisService {
	
		constructor(private fns: AngularFireFunctions) {}
	
		getBalance() {
	
			const callable = this.fns.httpsCallable('onGetBalance');
			const wallet = { address: "0x3bEcf83939f34311b6bEe143197872d877501B11" };
			return callable(wallet);
	
		}
	
	}
	`;
	serviceCommand = `nx g service --name=moralis --path=libs/services/moralis/src/lib --project=services-moralis`;
	serviceLibraryCommand = `nx g lib --name=moralis --directory=services`;
}
