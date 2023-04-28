import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BREAKPOINT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromBreakpoint from './+state/breakpoint.reducer';
import { BreakpointEffects } from './+state/breakpoint.effects';
import { BreakpointFacade } from './+state/breakpoint.facade';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(BREAKPOINT_FEATURE_KEY, fromBreakpoint.reducer),
		EffectsModule.forFeature([BreakpointEffects])
	],
	providers: [BreakpointFacade]
})
export class BreakpointModule {}
