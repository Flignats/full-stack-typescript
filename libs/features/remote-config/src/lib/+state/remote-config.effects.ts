import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { getRemoteConfig, getRemoteConfigFailure, getRemoteConfigSuccess } from './remote-config.actions';

@Injectable()
export class RemoteConfigEffects {
	constructor(
		private actions$: Actions<Action>,
		private angularFireRemoteConfig: AngularFireRemoteConfig
	) {}

	getRemoteConfig$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getRemoteConfig),
			exhaustMap(() =>
				this.angularFireRemoteConfig.booleans.pipe(
					map((config) => {
						return getRemoteConfigSuccess({ remoteConfig: config });
					}),
					catchError((error) =>
						of(getRemoteConfigFailure({ error }))
					)
				)
			)
		)
	)

}
