import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-introduction',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './documentation-introduction.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationIntroductionComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
