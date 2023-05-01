import { Injectable } from '@angular/core';
import { RemoteConfigState } from '@full-stack-typescript/models';
import { select, Store } from '@ngrx/store';
import { getRemoteConfig } from './remote-config.actions';
import * as RemoteConfigSelectors from './remote-config.selectors';

@Injectable({ providedIn: 'root' })
export class RemoteConfigFacade {
	config$ = this.store.pipe(select(RemoteConfigSelectors.config));
	error$ = this.store.pipe(select(RemoteConfigSelectors.error));
	isPending$ = this.store.pipe(select(RemoteConfigSelectors.isPending));

	constructor(private store: Store<RemoteConfigState>) {}

	getRemoteConfig() {
		this.store.dispatch(getRemoteConfig());
	}
}
