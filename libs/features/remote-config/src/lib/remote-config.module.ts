import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REMOTE_CONFIG_FEATURE_KEY } from '@full-stack-typescript/constants';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromRemoteConfig from './+state/remote-config.reducer';
import { RemoteConfigEffects } from './+state/remote-config.effects';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		StoreModule.forFeature(REMOTE_CONFIG_FEATURE_KEY, fromRemoteConfig.remoteConfigReducer),
		EffectsModule.forFeature([RemoteConfigEffects])
	]
})
export class RemoteConfigModule {}
