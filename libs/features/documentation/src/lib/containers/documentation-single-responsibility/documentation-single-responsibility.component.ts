import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-single-responsibility',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './documentation-single-responsibility.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationSingleResponsibilityComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
