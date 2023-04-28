import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-feature-example',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-feature-example.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFeatureExampleComponent {
	private breakpointFacade = inject(BreakpointFacade);

	accountActionsCode = `
	import { User } from '@full-stack-typescript/models';
	import { createAction, props } from '@ngrx/store';
	
	export const loadAccount = createAction('[Account] Load account');
	
	export const loadAccountSuccess = createAction(
		'[Account] Load account Success',
		props<{ account: User }>()
	);
	
	export const loadAccountFailure = createAction(
		'[Account] Load account Failure',
		props<{ error: any }>()
	);
	`;
	accountComponentCode = `
	import { Component } from '@angular/core';
	import { AccountFacade } from './+state/account.facade';
	
	@Component({
		selector: 'full-stack-typescript-account',
		templateUrl: './account.component.html',
		styleUrls: ['./account.component.scss'],
	})
	export class AccountComponent {
	
		account$ = this.accountFacade.account$;
	
		constructor(private accountFacade: AccountFacade) {}
	
	}	
	`;
	accountConstantCode = `export const ACCOUNT_FEATURE_KEY = 'account';`;
	accountEffectsCode = `
	import { Injectable } from '@angular/core';
	import { AuthState, uid } from '@full-stack-typescript/features/auth';
	import { User } from '@full-stack-typescript/models';
	import { AccountService } from '@full-stack-typescript/services/account';
	import { Actions, createEffect, ofType } from '@ngrx/effects';
	import { select, Store } from '@ngrx/store';
	import { catchError, of } from 'rxjs';
	import { concatMap, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
	import * as accountActions from './account.actions';
	
	@Injectable()
	export class AccountEffects {
	
		constructor(
			private actions$: Actions,
			private accountService: AccountService,
			private auth: Store<AuthState>
		) {}
	
		loadAccount$ = createEffect(() =>
			this.actions$.pipe(
			ofType(accountActions.loadAccount),
			concatMap((action) =>
				of(action).pipe(withLatestFrom(this.auth.pipe(select(uid))))
			),
			exhaustMap(([action, userUid]) =>
				this.accountService.loadAccount(userUid).pipe(
					map((account: User) => {
						return accountActions.loadAccountSuccess({ account });
					}),
					catchError((error) => of(accountActions.loadAccountFailure({ error })))
				)
			)
			)
		);
	}	
	`;
	accountFacadeCode = `
	import { Injectable } from '@angular/core';
	import { AccountPartialState } from '@full-stack-typescript/models';
	import { select, Store } from '@ngrx/store';
	import { loadAccount } from './account.actions';
	import * as accountSelectors from './account.selectors';
	
	@Injectable({ providedIn: 'root' })
	export class AccountFacade {
	
		account$ = this.store.pipe(select(accountSelectors.getAccountState));
		error$ = this.store.pipe(select(accountSelectors.getAccountError));
		isLoaded$ = this.store.pipe(select(accountSelectors.getAccountIsLoaded));
		isLoading$ = this.store.pipe(select(accountSelectors.getAccountIsLoading));
	
		constructor(private store: Store<AccountPartialState>) {}
	
		loadAccount() {
			this.store.dispatch(loadAccount());
		}
	
	}	
	`;
	accountLoadedResolverCode = `
	import { inject } from '@angular/core';
	import { ResolveFn } from '@angular/router';
	import { AccountFacade } from '@full-stack-typescript/features/account';
	
	export const accountLoadedResolver: ResolveFn<void> = () => {
	
		return inject(AccountFacade).loadAccount();
	
	};	
	`;
	accountRoutingModuleCode = `
	import { NgModule } from '@angular/core';
	import { RouterModule, Routes } from '@angular/router';
	import { AccountComponent } from './account.component';
	
	const routes: Routes = [
		{
			path: '',
			component: AccountComponent ,
			resolve: []
		}
	];
	
	@NgModule({
		imports: [RouterModule.forChild(routes)],
		exports: [RouterModule]
	})
	export class AccountRoutingModule {}	
	`;
	accountModuleCodeRouting = `
	import { CommonModule } from '@angular/common';
	import { NgModule } from '@angular/core';
	import { AccountRoutingModule } from './account-routing.module';
	
	@NgModule({
		imports: [CommonModule, AccountRoutingModule],
	})
	export class AccountModule {}	
	`;
	accountModuleCodeState = `
	...
	import { ACCOUNT_FEATURE_KEY } from '@full-stack-typescript/constants';
	import { EffectsModule } from '@ngrx/effects';
	import { StoreModule } from '@ngrx/store';
	import * as fromAccount from './+state/account.reducer';
	import { AccountEffects } from './+state/account.effects';
	
	@NgModule({
		imports: [
			...
			StoreModule.forFeature(
			ACCOUNT_FEATURE_KEY,
			fromAccount.reducer
			),
			EffectsModule.forFeature([AccountEffects]),
		],
		...
		providers: [],
	})
	export class AccountModule {}
	`;
	accountReducerCode = `
	import { AccountState } from '@full-stack-typescript/models';
	import { Action, createReducer, on } from '@ngrx/store';
	import * as accountActions from './account.actions';
	
	export const initialState: AccountState = {
		email: '',
		error: null,
		isLoaded: false,
		isLoading: false,
		uid: ''
	}
	
	const accountReducer = createReducer(
		initialState,
		on(accountActions.loadAccount, (state) => ({
			...state,
			isLoading: true,
		})),
		on(accountActions.loadAccountFailure, (state, { error }) => ({
			...state,
			error,
			isLoaded: false,
			isLoading: false
		})),
		on(accountActions.loadAccountSuccess, (state, { account }) => ({
			...state,
			...account,
			error: null,
			isLoaded: true,
			isLoading: false,
		})),
	);
	
	export function reducer(state: AccountState | undefined, action: Action) {
		return accountReducer(state, action);
	}	
	`;
	accountSelectorsCode = `
	import { ACCOUNT_FEATURE_KEY } from '@full-stack-typescript/constants';
	import { AccountState } from '@full-stack-typescript/models';
	import { createFeatureSelector, createSelector } from '@ngrx/store';
	
	// Lookup the 'Account' feature state managed by NgRx
	export const getAccountState = createFeatureSelector<AccountState>(ACCOUNT_FEATURE_KEY);
	
	export const getAccountIsLoaded = createSelector(
		getAccountState,
		(state: AccountState) => state.isLoaded
	);
	
	export const getAccountIsLoading = createSelector(
		getAccountState,
		(state: AccountState) => state.isLoading
	);
	
	export const getAccountError = createSelector(
		getAccountState,
		(state: AccountState) => state.error
	);	
	`;
	accountStateInterfaceCode = `
	import { User } from "../user";

	export interface AccountState extends User {
		error?: any;
		isLoaded: boolean;
		isLoading: boolean;
	}
	`;
	accountTemplateCode = `
<div>
    {{ account$ | async | json }}
</div>
	`;
	appCodeRouting = `
	...
	export const appRoutes: Route[] = [
		...
		{
			path: 'account',
			loadChildren: () => import('@full-stack-typescript/features/account').then((m) => m.AccountModule)
			title: 'Account Details - Full Stack Typescript'     
		},
		...
	];	
	`;
	appRouteResolverCode = `    { path: 'account', resolve: { account: accountLoadedResolver }, loadChildren: () => import('@full-stack-typescript/features/account').then((m) => m.AccountModule) },`;
	appNavigationCode = `<button mat-menu-item routerLink="account">Account</button>`;
	currentView$ = this.breakpointFacade.currentView$;
	generateAccountServiceLibrary = `nx g lib --name=account --directory=services`;
	generateFeatureComponent = `nx g component --project=features-account --flat --style=scss`;
	generateFeatureLibrary = `nx g lib --directory=features --name=account --routing --simpleName --style=scss --flat`;
	generateResolverFunctionCode = `nx g resolver --name=account-loaded --flat --functional --path=libs/resolvers/account/src/lib --project=resolvers-account`;
	generateResolverLibraryCode = `nx g lib --directory=resolvers --name=account`;
	initAccountState = `nx g @nrwl/angular:ngrx account --module=libs/features/account/src/lib/account.module.ts --facade --no-interactive`;
}
