import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-workspace-setup',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-workspace-setup.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationWorkspaceSetupComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	cloneRepository = `git clone {{repository link when available}} {{new-project}}`;
	installDependencies = `npm install --legacy-peer-deps // include legacy peer deps if necessary`;
	navigateToRepository = `cd {{new-project}}`;
}
