import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-feature-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-feature-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFeatureWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	libraryGenerateCommand = `nx g lib --directory=features --name={{feature name}} --routing --simpleName --standalone --style=scss --flat`;
	libraryLocation = `/libs/features/{{feature name}}`;
	libraryOptionsCommand = `nx g lib --help`;
}
