import {
	BreakpointCurrentView,
	BreakpointFailedMatch
} from '@full-stack-typescript/models';
import { createAction, props } from '@ngrx/store';

export const isXSmall = createAction(
	'[Breakpoint Observer] Extra small screen',
	props<{ currentView: BreakpointCurrentView }>()
);

export const isSmall = createAction(
	'[Breakpoint Observer] Small screen',
	props<{ currentView: BreakpointCurrentView }>()
);

export const isMedium = createAction(
	'[Breakpoint Observer] Medium screen',
	props<{ currentView: BreakpointCurrentView }>()
);

export const isLarge = createAction(
	'[Breakpoint Observer] Large screen',
	props<{ currentView: BreakpointCurrentView }>()
);

export const isXLarge = createAction(
	'[Breakpoint Observer] Extra large screen',
	props<{ currentView: BreakpointCurrentView }>()
);

export const breakpointFailure = createAction(
	'[Breakpoint Observer] Failure',
	props<{ result: BreakpointFailedMatch }>()
);
