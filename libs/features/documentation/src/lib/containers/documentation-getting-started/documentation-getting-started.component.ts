import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-getting-started',
	standalone: true,
	imports: [CommonModule, HighlightModule, RouterModule],
	templateUrl: './documentation-getting-started.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationGettingStartedComponent {
	private breakpointFacade = inject(BreakpointFacade);
	currentView$ = this.breakpointFacade.currentView$;

	cloneCommand = `
git clone <<link when released>> new-project
cd new-project
npm install --legacy-peer-deps
	`;
}
