import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-icon-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-icon-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationIconWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;
	exampleIconFile = `icon-bitcoin.constant.ts`;
	exampleIconComponent = `
	export class IconExamplesComponent {
		private iconRegistryService = inject(IconRegistryService);
	
		constructor() {
			this.iconRegistryService.registerIcons([ICON_BITCOIN]);
		}
	}
	`;
	exampleIconTemplate = `
	<full-stack-typescript-icons [name]="'bitcoin'" [color]="'#b5a33f'" [height]="'175'" [width]="'175'"></full-stack-typescript-icons>
	`;
	iconDefinitionLocation = `libs/constants/src/lib/icons`;
	iconInformation = `
	import { Icon } from '@full-stack-typescript/models';

	export const ICON_BITCOIN: Icon = {
		name: 'bitcoin',
		data: '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6V4m4 2V4m0 2H7m7 0a3 3 0 1 1 0 6m-5 6v-6m0-6v6m1 8v-2m4 2v-2m-5-6h6a3 3 0 1 1 0 6H7"/></svg>'
	};
	`;
	iconSourceCode = `libs/features/icons/src/lib/icons.component.ts`;
}
