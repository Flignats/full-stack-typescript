import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
	providedIn: 'root'
})
export class MoralisService {
	constructor(private fns: AngularFireFunctions) {}

	getBalance(address: string) {
		const callable = this.fns.httpsCallable('onGetBalance');
		const wallet = { address };
		return callable(wallet);
	}
}
