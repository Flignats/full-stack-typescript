import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticateUser, User } from '@full-stack-typescript/models';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
	login,
	loginFailure,
	loginSuccess,
	logout,
	register,
	registerFailure,
	registerSuccess
} from './auth.actions';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions<Action>,
		private angularFireAnalytics: AngularFireAnalytics,
		private authService: AngularFireAuth,
		private router: Router
	) {}

	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(login),
			map((action) => action.auth),
			switchMap((auth: AuthenticateUser) =>
				from(
					this.authService.setPersistence('session').then(() => {
						return this.authService.signInWithEmailAndPassword(
							auth.email,
							auth.password
						);
					})
				).pipe(
					map((authedUser) => {
						console.log('authedUser:::', authedUser);

						this.angularFireAnalytics.logEvent('login', {
							uid: authedUser?.user?.uid
						});

						const user: User = {
							displayName: authedUser?.user?.displayName || '',
							email: authedUser?.user?.email || '',
							phoneNumber: authedUser?.user?.phoneNumber || '',
							photoURL: authedUser?.user?.photoURL || '',
							refreshToken: authedUser?.user?.refreshToken || '',
							uid: authedUser?.user?.uid || ''
						};

						return loginSuccess({ authedUser: user });
					}),
					catchError((error) =>
						of(loginFailure({ error: error.message }))
					)
				)
			)
		)
	);

	logout$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(logout),
				tap(() => {
					this.authService.signOut();
					this.router.navigate(['/']);
				})
			),
		{ dispatch: false }
	);

	register$ = createEffect(() =>
		this.actions$.pipe(
			ofType(register),
			map((action) => action.auth),
			switchMap((auth: AuthenticateUser) =>
				from(
					this.authService.createUserWithEmailAndPassword(
						auth.email,
						auth.password
					)
				).pipe(
					map((authedUser) => {
						this.authService.currentUser.then((user: any) =>
							user.sendEmailVerification()
						);

						const user: User = {
							displayName: authedUser?.user?.displayName || '',
							email: authedUser?.user?.email || '',
							phoneNumber: authedUser?.user?.phoneNumber || '',
							photoURL: authedUser?.user?.photoURL || '',
							refreshToken: authedUser?.user?.refreshToken || '',
							uid: authedUser?.user?.uid || ''
						};

						return registerSuccess({ authedUser: user });
					}),
					catchError((error) => of(registerFailure({ error })))
				)
			)
		)
	);

	redirectHome$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(loginSuccess, registerSuccess),
				map((action) => action.authedUser),
				switchMap(() => this.router.navigate(['/about']))
			),
		{ dispatch: false }
	);
}
