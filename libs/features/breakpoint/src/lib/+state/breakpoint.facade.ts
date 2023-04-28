import { Injectable } from '@angular/core';
import { BreakpointPartialState } from '@full-stack-typescript/models';
import { select, Store } from '@ngrx/store';
import * as breakpointSelectors from './breakpoint.selectors';

@Injectable({ providedIn: 'root' })
export class BreakpointFacade {
	breakpoints$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointState)
	);
	currentView$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointCurrentView)
	);
	failedMatch$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointFailedMatch)
	);
	isLarge$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointIsLarge)
	);
	isMedium$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointIsMedium)
	);
	isSmall$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointIsSmall)
	);
	isXLarge$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointIsXLarge)
	);
	isXSmall$ = this.store.pipe(
		select(breakpointSelectors.getBreakpointIsXSmall)
	);

	constructor(private store: Store<BreakpointPartialState>) {}
}
