import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const authState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const error = createSelector(
	authState,
	(state: AuthState) => state.error
);
export const isAuthenticated = createSelector(
	authState,
	(state: AuthState) => state.isAuthenticated
);
export const isPending = createSelector(
	authState,
	(state: AuthState) => state.isPending
);
export const uid = createSelector(authState, (state: AuthState) => state.uid);
export const userDisplayName = createSelector(
	authState,
	(state: AuthState) => state.displayName
);
