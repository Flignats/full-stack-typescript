import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AccountFacade } from '@full-stack-typescript/features/account';
import { getMessaging } from 'firebase/messaging';
import { BehaviorSubject } from 'rxjs';
/* eslint-disable @typescript-eslint/no-non-null-assertion */

@Injectable({
	providedIn: 'root'
})
export class FirebaseMessagingService {
	private accountTokens$ = this.accountFacade.tokens$;
	private messaging = getMessaging();

	currentMessage = new BehaviorSubject<any>(null);

	constructor(
		private accountFacade: AccountFacade,
		private angularFireMessaging: AngularFireMessaging
	) {}

	receiveMessage() {
		this.angularFireMessaging.messages.subscribe((message: any) => {
			console.log('New Message Received:::', message);
			this.currentMessage.next(message);
		});
	}

	requestPermission() {
		this.angularFireMessaging.requestToken.subscribe((token) => {
			console.log('TOKEN:::', token);
			this.accountFacade.updateAccountTokens(token!);
		}),
			(error: any) => {
				console.log('Request Permission ERROR:::', error);
			};
	}
}
