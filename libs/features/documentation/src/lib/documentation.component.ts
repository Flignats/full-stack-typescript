import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-documentation',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
}
