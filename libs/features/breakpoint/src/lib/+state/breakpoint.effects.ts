import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
	breakpointFailure,
	isLarge,
	isMedium,
	isSmall,
	isXLarge,
	isXSmall
} from './breakpoint.actions';

@Injectable()
export class BreakpointEffects {
	private breakpointObserver = inject(BreakpointObserver);

	breakpointXSmall$ = createEffect(() =>
		this.breakpointObserver
			.observe([Breakpoints.XSmall])
			.pipe(
				map((result) =>
					result.matches
						? isXSmall({ currentView: 'xSmall' })
						: breakpointFailure({ result })
				)
			)
	);

	breakpointSmall$ = createEffect(() =>
		this.breakpointObserver
			.observe([Breakpoints.Small])
			.pipe(
				map((result) =>
					result.matches
						? isSmall({ currentView: 'small' })
						: breakpointFailure({ result })
				)
			)
	);

	breakpointMedium$ = createEffect(() =>
		this.breakpointObserver
			.observe([Breakpoints.Medium])
			.pipe(
				map((result) =>
					result.matches
						? isMedium({ currentView: 'medium' })
						: breakpointFailure({ result })
				)
			)
	);

	breakpointLarge$ = createEffect(() =>
		this.breakpointObserver
			.observe([Breakpoints.Large])
			.pipe(
				map((result) =>
					result.matches
						? isLarge({ currentView: 'large' })
						: breakpointFailure({ result })
				)
			)
	);

	breakpointXLarge$ = createEffect(() =>
		this.breakpointObserver
			.observe([Breakpoints.XLarge])
			.pipe(
				map((result) =>
					result.matches
						? isXLarge({ currentView: 'xLarge' })
						: breakpointFailure({ result })
				)
			)
	);
}
