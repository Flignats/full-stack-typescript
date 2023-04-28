import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { WEB3_FEATURE_KEY } from '@full-stack-typescript/constants';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Web3RoutingModule } from './web3-routing.module';
import { Web3Component } from './web3.component';
import * as fromWeb3 from './+state/web3.reducer';
import { Web3Effects } from './+state/web3.effects';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		Web3RoutingModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		StoreModule.forFeature(WEB3_FEATURE_KEY, fromWeb3.reducer),
		EffectsModule.forFeature([Web3Effects])
	],
	declarations: [Web3Component]
})
export class Web3Module {}
