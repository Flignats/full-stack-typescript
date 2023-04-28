import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { User } from '@full-stack-typescript/models';
import { FirestoreService } from '@full-stack-typescript/services/firestore';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends FirestoreService {
	constructor(private fns: AngularFireFunctions, afs: AngularFirestore) {
		super(afs);
	}

	loadAccount(uid: string | undefined): Observable<User> {
		return this.doc$(`users/${uid}`);
	}

	updateAccount(account: User): Observable<User> {
		const callable = this.fns.httpsCallable('onUpdateAccount');
		return callable(account) as Observable<User>;
	}

	updateAccountToken(token: string): Observable<string> {
		const callable = this.fns.httpsCallable('onUpdateAccountTokens');
		const result = callable(token);

		return result as Observable<string>;
	}
}
