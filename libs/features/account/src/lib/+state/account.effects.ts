import { Injectable } from '@angular/core';
import { AuthState, uid } from '@full-stack-typescript/features/auth';
import { AccountState, User } from '@full-stack-typescript/models';
import { AccountService } from '@full-stack-typescript/services/account';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, of } from 'rxjs';
import { concatMap, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import * as accountActions from './account.actions';
import { getAccountTokens } from './account.selectors';

@Injectable()
export class AccountEffects {
	constructor(
		private actions$: Actions,
		private account: Store<AccountState>,
		private accountService: AccountService,
		private auth: Store<AuthState>
	) {}

	loadAccount$ = createEffect(() =>
		this.actions$.pipe(
			ofType(accountActions.loadAccount),
			concatMap((action) =>
				of(action).pipe(withLatestFrom(this.auth.pipe(select(uid))))
			),
			exhaustMap(([action, userUid]) => {
				return this.accountService.loadAccount(userUid).pipe(
					map((account: User) => {
						return accountActions.loadAccountSuccess({ account });
					}),
					catchError((error) =>
						of(accountActions.loadAccountFailure({ error }))
					)
				);
			})
		)
	);

	updateAccount$ = createEffect(() =>
		this.actions$.pipe(
			ofType(accountActions.updateAccount),
			exhaustMap(({ account }) =>
				this.accountService.updateAccount(account).pipe(
					map(() => {
						return accountActions.updateAccountSuccess();
					}),
					catchError((error) =>
						of(accountActions.updateAccountFailure({ error }))
					)
				)
			)
		)
	);

	updateAccountTokens$ = createEffect(() =>
		this.actions$.pipe(
			ofType(accountActions.updateAccountTokens),
			concatMap((action) =>
				of(action).pipe(
					withLatestFrom(this.account.pipe(select(getAccountTokens)))
				)
			),
			exhaustMap(([{ token }, accountTokens = {}]) => {
				const currentTokens = Object.keys(accountTokens);
				const tokenExists = currentTokens.includes(token);

				if (tokenExists) {
					return of(accountActions.updateAccountTokensSuccess());
				} else {
					return this.accountService.updateAccountToken(token).pipe(
						map(() => {
							return accountActions.updateAccountTokensSuccess();
						}),
						catchError((error) =>
							of(
								accountActions.updateAccountTokensFailure({
									error
								})
							)
						)
					);
				}
			})
		)
	);
}
