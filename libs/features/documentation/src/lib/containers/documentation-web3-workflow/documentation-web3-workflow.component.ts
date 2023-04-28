import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-web3-workflow',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './documentation-web3-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationWeb3WorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
