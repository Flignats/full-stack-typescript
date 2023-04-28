import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: []
})
export class AuthModule {}
