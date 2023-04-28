import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-request-for-changes',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './documentation-request-for-changes.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationRequestForChangesComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
