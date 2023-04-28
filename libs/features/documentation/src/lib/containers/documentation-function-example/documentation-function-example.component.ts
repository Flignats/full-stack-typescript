import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-function-example',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-function-example.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationFunctionExampleComponent {
	private breakpointFacade = inject(BreakpointFacade);

	currentView$ = this.breakpointFacade.currentView$;

	accountComponentCode = `
	githubURL = '';
	
	onUpdateAccount() {

		this.accountFacade.updateAccount({ githubURL: this.githubURL });

	}
	`;
	accountModuleCode = `
	import { FormsModule } from '@angular/forms';

	@NgModule({
		imports: [
			...
			FormsModule,
			...
		],
	})
	export class AccountModule {}
	`;
	accountServiceCode = `
	import { AngularFireFunctions } from '@angular/fire/compat/functions';

	constructor(private fns: AngularFireFunctions, afs: AngularFirestore) {

		super(afs);

	}
	
	updateAccount(account: User): Observable<User> {

		const callable = this.fns.httpsCallable('onUpdateAccount');
		return callable(account) as Observable<User>;

	}
	`;
	accountTemplateCode = `
<div>
    Update Github URL: <input type="text" [(ngModel)]="githubURL">
    <button (click)="onUpdateAccount()">Update Account</button>
</div>
	`;
	actionsCode = `
	...
	export const updateAccount = createAction(
		'[Account] Update account',
		props<{ account: User }>()
	);
	
	export const updateAccountFailure = createAction(
		'[Account] Update account Failure',
		props<{ error: any }>()
	);
	
	export const updateAccountSuccess = createAction(
		'[Account] Update account Success'
	);
	`;
	effectsCode = `
	updateAccount$ = createEffect(() =>
		this.actions$.pipe(
			ofType(accountActions.updateAccount),
			exhaustMap(({ account }) =>
				this.accountService.updateAccount(account).pipe(
					map(() => {
						return accountActions.updateAccountSuccess();
					}),
					catchError((error) => of(accountActions.updateAccountFailure({ error })))
				)
			)
		)
	);
	`;
	facadeCode = `
    updateAccount(account: User) {
        this.store.dispatch(updateAccount({ account }));
    }
	`;
	functionBuildCommand = `nx build full-stack-typescript-api`;
	functionCode = `
	import { User } from '@full-stack-typescript/models';
	import * as admin from 'firebase-admin';
	
	const {
		firestoreInstance,
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	} = require('../../utils/admin');
	
	export async function onUpdateAccount(data: User, context) {
	
		const batch = firestoreInstance.batch(); // Get a new write batch
		const serverTimestamp = admin.firestore.Timestamp.now();
		const uid = context.auth.uid;
	
		const userDoc = firestoreInstance.collection('users').doc(uid); // Get paths
	
		batch.update(userDoc, {
			...data,
			updatedAt: serverTimestamp
		}, { merge: true });
	
		return batch.commit();
	
	};	
	`;
	functionDeployCommand = `firebase deploy --only functions`;
	functionLocation = `
functions
	- account
		- index.ts
	`;
	reducerCode = `
	const accountReducer = createReducer(
		initialState,
		...
		on(accountActions.loadAccountFailure, accountActions.updateAccountFailure, (state, { error }) => ({
			...state,
			error,
			isLoaded: false,
			isLoading: false
		})),
		...
		on(accountActions.updateAccount, (state) => ({
			...state,
			isLoading: true
		})),
		on(accountActions.updateAccountSuccess, (state) => ({
			...state,
			error: null,
			isLoaded: false
		}))
	);
	`;
}
