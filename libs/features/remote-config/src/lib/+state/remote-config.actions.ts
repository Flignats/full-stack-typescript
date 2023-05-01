import { createAction, props } from '@ngrx/store';

export const getRemoteConfig = createAction('[Remote Config] Get remote config');

export const getRemoteConfigFailure = createAction(
	'[Remote Config] Get remote config => Fail',
	props<{ error: any }>()
);

export const getRemoteConfigSuccess = createAction(
	'[Remote Config] Get remote config => Success',
	props<{ remoteConfig: any }>()
);
