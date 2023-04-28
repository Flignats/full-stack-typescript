import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { AuthService } from '@full-stack-typescript/services/auth';

@Component({
	selector: 'full-stack-typescript-forgot-password',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
	private authService = inject(AuthService);
	private breakpointFacade = inject(BreakpointFacade);
	private formBuilder = inject(FormBuilder);

	authForm = this.formBuilder.group({ email: ['', Validators.required] });
	currentView$ = this.breakpointFacade.currentView$;

	onSubmitAuthForm() {
		if (this.authForm.valid) {
			const email = this.authForm.value.email || '';

			this.authService.forgotPassword(email);
		}
	}
}
