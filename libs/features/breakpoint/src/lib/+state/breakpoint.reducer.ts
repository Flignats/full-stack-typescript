import { BreakpointState } from '@full-stack-typescript/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as breakpointActions from './breakpoint.actions';

export const initialState: BreakpointState = {
	currentView: 'xSmall',
	failedMatch: undefined,
	isXSmall: false,
	isSmall: false,
	isMedium: false,
	isLarge: false,
	isXLarge: false
};

const breakpointReducer = createReducer(
	initialState,
	on(breakpointActions.breakpointFailure, (state, { result }) => ({
		...state,
		failedMatch: result
	})),
	on(breakpointActions.isLarge, (state, { currentView }) => ({
		...initialState,
		currentView,
		isLarge: true
	})),
	on(breakpointActions.isMedium, (state, { currentView }) => ({
		...initialState,
		currentView,
		isMedium: true
	})),
	on(breakpointActions.isSmall, (state, { currentView }) => ({
		...initialState,
		currentView,
		isSmall: true
	})),
	on(breakpointActions.isXLarge, (state, { currentView }) => ({
		...initialState,
		currentView,
		isXLarge: true
	})),
	on(breakpointActions.isXSmall, (state, { currentView }) => ({
		...initialState,
		currentView,
		isXSmall: true
	}))
);

export function reducer(state: BreakpointState | undefined, action: Action) {
	return breakpointReducer(state, action);
}
