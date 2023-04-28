import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-environment-setup',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-environment-setup.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationEnvironmentSetupComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	installAngularCli = `npm install -g @angular/cli`;
	installNrwlSchematics = `npm install -g @nrwl/schematics`;
	verifyGit = `git --version`;
	verifyNode = `node -v`;
}
