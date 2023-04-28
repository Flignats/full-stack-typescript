import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@full-stack-typescript/models';
import * as auth from 'firebase/auth';
/* eslint-disable @typescript-eslint/no-non-null-assertion */

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userData: any;

	constructor(
		public afs: AngularFirestore,
		public afAuth: AngularFireAuth,
		public router: Router,
		public ngZone: NgZone // NgZone service to remove outside scope warning
	) {
		/* When logged in, localstorage is used to save user data, and when logged out, null is set up. */
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user')!);
			} else {
				localStorage.setItem('user', 'null');
				JSON.parse(localStorage.getItem('user')!);
			}
		});
	}
	// Sign in with email/password
	signIn(email: string, password: string) {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.ngZone.run(() => {
					this.router.navigate(['dashboard']);
				});
				this.setUserData(result.user);
			})
			.catch((error) => {
				window.alert(error.message);
			});
	}
	// Sign up with email/password
	signUp(email: string, password: string) {
		return this.afAuth
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				/* After a new user signs up, call the SendVerificaitonMail() function and get a promise */
				this.sendVerificationMail();
				this.setUserData(result.user);
			})
			.catch((error) => {
				window.alert(error.message);
			});
	}
	// Send email verfificaiton when new user sign up
	sendVerificationMail() {
		return this.afAuth.currentUser
			.then((user: any) => user.sendEmailVerification())
			.then(() => {
				this.router.navigate(['about']);
			});
	}
	// Reset Forggot password
	forgotPassword(passwordResetEmail: string) {
		return this.afAuth
			.sendPasswordResetEmail(passwordResetEmail)
			.then(() => {
				window.alert('Password reset email sent, check your inbox.');
			})
			.catch((error) => {
				window.alert(error);
			});
	}
	// when the user is logged in and the email is confirmed, it returns true.
	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user')!);
		return user !== null && user.emailVerified !== false ? true : false;
	}
	// Sign in with Google
	googleAuth() {
		return this.authLogin(new auth.GoogleAuthProvider()).then(
			(res: any) => {
				if (res) {
					this.router.navigate(['dashboard']);
				}
			}
		);
	}
	// Auth logic to run auth providers
	authLogin(provider: any) {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				this.ngZone.run(() => {
					this.router.navigate(['dashboard']);
				});
				this.setUserData(result.user);
			})
			.catch((error) => {
				window.alert(error);
			});
	}
	/* Setting up user data in the Firestore database using AngularFirestore and the AngularFirestoreDocument service for login with username and password, signup with username and password, and sign in using a social authentication provider. */
	setUserData(user: any) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(
			`users/${user.uid}`
		);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		};
		return userRef.set(userData, {
			merge: true
		});
	}
	// Sign out
	signOut() {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem('user');
			this.router.navigate(['sign-in']);
		});
	}
}
