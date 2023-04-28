import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BreakpointCurrentView } from '@full-stack-typescript/models';

@Component({
	selector: 'full-stack-typescript-app-sidenav',
	standalone: true,
	imports: [CommonModule, MatDividerModule, MatListModule],
	templateUrl: './app-sidenav.component.html',
	styleUrls: ['./app-sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidenavComponent {
	@Input() currentView: BreakpointCurrentView | null = 'xSmall';

	@Output() toggleSidenav = new EventEmitter<void>();
	@Output() navigate = new EventEmitter<string>();

	onNavigate(route: string) {
		this.navigate.emit(route);
	}

	onToggleSidenav() {
		this.toggleSidenav.emit();
	}
}
