import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-secret-manager-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-secret-manager-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationSecretManagerWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;

	functionCode = `
	import { EvmChain } from '@moralisweb3/common-evm-utils';
	import Moralis from 'moralis';
	import { getSecretValue } from '../../utils/get-secret-value';
	
	export async function onGetBalance(data: any, context) {
	
		const mySecret = await getSecretValue('moralis');
	
		Moralis.start({
			apiKey: mySecret
		});
	
		const result = await Moralis.EvmApi.balance.getNativeBalance({
			chain: EvmChain.ETHEREUM,
			address: data.address,
		});
	
		return {
			balance: result.result.balance.ether
		};
	
	};
	`;
	installCommand = `npm install @google-cloud/secret-manager`;
	utilCode = `
	import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
	const secrets = new SecretManagerServiceClient();
	
	export async function getSecretValue (name: string) {
	
		const [version] = await secrets.accessSecretVersion({
			name: "projects/{{project resource id}}/secrets/\${name}/versions/latest",
		});
	
		const payload = version.payload?.data?.toString();
		return payload;
	
	}
	`;
}
