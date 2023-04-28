import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-function-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-function-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFunctionWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	functionLocation = `/apps/full-stack-typescript-api/src/functions/{{feature name}}`;
	functionDashboardLocation = `https://console.firebase.google.com/u/0/project/{{your project}}/functions`;
}
