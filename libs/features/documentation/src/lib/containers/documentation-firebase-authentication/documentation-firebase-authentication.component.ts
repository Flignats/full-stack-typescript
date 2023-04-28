import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-firebase-authentication',
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './documentation-firebase-authentication.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFirebaseAuthenticationComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
