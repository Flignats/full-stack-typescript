import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Output
} from '@angular/core';

@Component({
	selector: 'full-stack-typescript-app-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app-footer.component.html',
	styleUrls: ['./app-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {
	@Output() navigate = new EventEmitter<string>();

	onNavigate(route: string) {
		this.navigate.emit(route);
	}
}
