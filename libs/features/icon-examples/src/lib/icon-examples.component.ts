import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
	ICON_BITCOIN,
	ICON_MENU_HAMBURGER,
	ICON_MENU_MEATBALLS_HORIZONTAL,
	ICON_MENU_MEATBALLS_VERTICAL
} from '@full-stack-typescript/constants';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { IconsComponent } from '@full-stack-typescript/features/icons';
import { IconRegistryService } from '@full-stack-typescript/services/icon-registry';

@Component({
	selector: 'full-stack-typescript-icon-examples',
	standalone: true,
	imports: [CommonModule, IconsComponent],
	templateUrl: './icon-examples.component.html',
	styleUrls: ['./icon-examples.component.scss']
})
export class IconExamplesComponent {
	private breakpointFacade = inject(BreakpointFacade);
	private iconRegistryService = inject(IconRegistryService);

	currentView$ = this.breakpointFacade.currentView$;

	constructor() {
		this.iconRegistryService.registerIcons([
			ICON_BITCOIN,
			ICON_MENU_HAMBURGER,
			ICON_MENU_MEATBALLS_HORIZONTAL,
			ICON_MENU_MEATBALLS_VERTICAL
		]);
	}
}
