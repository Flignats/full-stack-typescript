import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation-firestore-database',
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './documentation-firestore-database.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFirestoreDatabaseComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
