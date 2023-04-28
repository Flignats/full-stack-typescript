import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-firebase-project-setup',
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './documentation-firebase-project-setup.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFirebaseProjectSetupComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
