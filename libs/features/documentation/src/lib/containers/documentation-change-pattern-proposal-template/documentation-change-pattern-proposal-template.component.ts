import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector:
		'full-stack-typescript-documentation-change-pattern-proposal-template',
	standalone: true,
	imports: [CommonModule],
	templateUrl:
		'./documentation-change-pattern-proposal-template.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationChangePatternProposalTemplateComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
