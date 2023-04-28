import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { AuthService } from '@full-stack-typescript/services/auth';

@Component({
	selector: 'full-stack-typescript-verify-email',
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	templateUrl: './verify-email.component.html',
	styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
	private authService = inject(AuthService);
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;

	onSendVerificationEmail() {
		this.authService.sendVerificationMail();
	}
}
