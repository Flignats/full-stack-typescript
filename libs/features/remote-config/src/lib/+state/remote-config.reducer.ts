import { RemoteConfigState } from '@full-stack-typescript/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as RemoteConfigActions from './remote-config.actions';

export const initialState: RemoteConfigState = {
	error: undefined,
	config: undefined,
	isPending: false
};

const reducer = createReducer(
	initialState,
	on(
		RemoteConfigActions.getRemoteConfig,
		(state) => ({
			...state,
			isPending: true
		})
	),
	on(
		RemoteConfigActions.getRemoteConfigSuccess,
		(state, { remoteConfig }) => ({
			...state,
			config: remoteConfig,
			isPending: false
		})
	),
	on(
		RemoteConfigActions.getRemoteConfigFailure,
		(state, { error }) => ({
			...state,
			error,
			isPending: false
		})
	)
);

export function remoteConfigReducer(state: RemoteConfigState | undefined, action: Action) {
	return reducer(state, action);
}
