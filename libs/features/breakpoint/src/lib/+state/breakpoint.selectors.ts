import { BREAKPOINT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { BreakpointState } from '@full-stack-typescript/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Breakpoint' feature state managed by NgRx
export const getBreakpointState = createFeatureSelector<BreakpointState>(
	BREAKPOINT_FEATURE_KEY
);

export const getBreakpointCurrentView = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.currentView
);

export const getBreakpointFailedMatch = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.failedMatch
);

export const getBreakpointIsLarge = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.isLarge
);

export const getBreakpointIsMedium = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.isMedium
);
export const getBreakpointIsSmall = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.isSmall
);
export const getBreakpointIsXLarge = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.isXLarge
);
export const getBreakpointIsXSmall = createSelector(
	getBreakpointState,
	(state: BreakpointState) => state.isXSmall
);
