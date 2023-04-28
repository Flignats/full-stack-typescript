import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthFacade } from '@full-stack-typescript/features/auth';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';

@Component({
	selector: 'full-stack-typescript-sign-up',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
	private authFacade = inject(AuthFacade);
	private breakpointFacade = inject(BreakpointFacade);
	private formBuilder = inject(FormBuilder);

	authForm: FormGroup;
	currentView$ = this.breakpointFacade.currentView$;

	constructor() {
		this.authForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	onSubmitAuthForm(email: string, password: string) {
		this.authFacade.submitUserRegistration({ email, password });
	}
}
