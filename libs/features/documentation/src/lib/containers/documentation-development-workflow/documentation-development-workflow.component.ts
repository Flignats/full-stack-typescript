import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-development-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-development-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationDevelopmentWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
