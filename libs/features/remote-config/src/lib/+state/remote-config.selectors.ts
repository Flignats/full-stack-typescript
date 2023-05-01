import { REMOTE_CONFIG_FEATURE_KEY } from '@full-stack-typescript/constants';
import { RemoteConfigState } from '@full-stack-typescript/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Remote Config' feature state managed by NgRx
export const remoteConfigState = createFeatureSelector<RemoteConfigState>(REMOTE_CONFIG_FEATURE_KEY);

export const config = createSelector(
	remoteConfigState,
	(state: RemoteConfigState) => state.config
);

export const isPending = createSelector(
	remoteConfigState,
	(state: RemoteConfigState) => state.isPending
);

export const error = createSelector(
	remoteConfigState,
	(state: RemoteConfigState) => state.error
);
