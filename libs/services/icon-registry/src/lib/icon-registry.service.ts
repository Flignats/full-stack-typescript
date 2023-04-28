import { Injectable } from '@angular/core';
import { Icon } from '@full-stack-typescript/models';

@Injectable({
	providedIn: 'root'
})
export class IconRegistryService {
	private registry = new Map<string, string>();

	getIcon(iconName: string): string | undefined {
		if (!this.registry.has(iconName)) {
			console.warn(
				`We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`
			);
		}

		return this.registry.get(iconName);
	}

	registerIcons(icons: Icon[]) {
		icons.forEach((icon: Icon) => this.registry.set(icon.name, icon.data));
	}
}
