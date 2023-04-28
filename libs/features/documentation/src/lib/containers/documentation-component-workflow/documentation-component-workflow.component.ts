import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-component-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-component-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationComponentWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	libraryGenerateCommand = `nx g lib --name={{component-name}} --directory=libs/components --changeDetection=OnPush --flat --standalone --style=scss`;
	libraryLocation = `/libs/components/{{component-name}}`;
	libraryOptionsCommand = `nx g component --help`;
}
