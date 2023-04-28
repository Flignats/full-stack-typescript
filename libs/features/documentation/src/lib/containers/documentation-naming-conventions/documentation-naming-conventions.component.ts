import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-naming-conventions',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './documentation-naming-conventions.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationNamingConventionsComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
