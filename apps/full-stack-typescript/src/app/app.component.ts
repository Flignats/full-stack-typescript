import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_MENU_HAMBURGER } from '@full-stack-typescript/constants';
import { AccountFacade } from '@full-stack-typescript/features/account';
import { AuthFacade } from '@full-stack-typescript/features/auth';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { FirebaseMessagingService } from '@full-stack-typescript/services/firebase-messaging';
import { IconRegistryService } from '@full-stack-typescript/services/icon-registry';

@Component({
	selector: 'full-stack-typescript-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private accountFacade = inject(AccountFacade);
	private authFacade = inject(AuthFacade);
	private breakpointFacade = inject(BreakpointFacade);
	private firebaseMessagingService = inject(FirebaseMessagingService);
	private iconRegistryService = inject(IconRegistryService);
	private router = inject(Router);

	currentView$ = this.breakpointFacade.currentView$;
	isAccountLoaded$ = this.accountFacade.isLoaded$;
	isAuthenticated$ = this.authFacade.isAuthenticated$;
	message: any;
	title = 'full-stack-typescript';

	constructor() {
		this.iconRegistryService.registerIcons([ICON_MENU_HAMBURGER]);
	}

	ngOnInit() {
		console.log('APP INIT');
	}

	onIsAccountDetailsLoaded() {
		this.firebaseMessagingService.requestPermission();
		this.firebaseMessagingService.receiveMessage();
		this.message = this.firebaseMessagingService.currentMessage;
	}

	onIsAuthed() {
		this.accountFacade.loadAccount();
	}

	onNavigate(route: string) {
		this.router.navigate([`/${route}`]);
	}
}
