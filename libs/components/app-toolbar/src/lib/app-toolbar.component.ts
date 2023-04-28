import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChange,
	SimpleChanges
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconsComponent } from '@full-stack-typescript/features/icons';
import { BreakpointCurrentView } from '@full-stack-typescript/models';

@Component({
	selector: 'full-stack-typescript-app-toolbar',
	standalone: true,
	imports: [
		CommonModule,
		IconsComponent,
		MatDividerModule,
		MatMenuModule,
		MatToolbarModule
	],
	templateUrl: './app-toolbar.component.html',
	styleUrls: ['./app-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent implements OnChanges {
	@Input() currentView: BreakpointCurrentView | null = 'xSmall';
	@Input() isAccountLoaded: boolean | null = false;
	@Input() isAuthenticated: boolean | null = false;

	@Output() isAuthed = new EventEmitter<void>();
	@Output() isAccountDetailsLoaded = new EventEmitter<void>();
	@Output() navigate = new EventEmitter<string>();
	@Output() toggleSidenav = new EventEmitter<void>();

	private accountLoaded(changes: SimpleChange) {
		const currentValue = changes.currentValue;
		const previousValue = !changes.previousValue;

		if (previousValue && currentValue) {
			this.isAccountDetailsLoaded.emit();
		}
	}

	private authenticated(changes: SimpleChange) {
		const currentValue = changes.currentValue;
		const previousValue = !changes.previousValue;

		if (previousValue && currentValue) {
			this.isAuthed.emit();
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		const authChanges = changes['isAuthenticated'];
		const accountLoadedChanges = changes['isAccountLoaded'];

		if (authChanges) {
			this.authenticated(authChanges);
		}

		if (accountLoadedChanges) {
			this.accountLoaded(accountLoadedChanges);
		}
	}

	onNavigate(route: string) {
		this.navigate.emit(route);
	}

	onToggleSidenav() {
		this.toggleSidenav.emit();
	}
}
