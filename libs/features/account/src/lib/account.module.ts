import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ACCOUNT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import * as fromAccount from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';

@NgModule({
	imports: [
		CommonModule,
		AccountRoutingModule,
		FormsModule,
		StoreModule.forFeature(ACCOUNT_FEATURE_KEY, fromAccount.reducer),
		EffectsModule.forFeature([AccountEffects]),
		MatButtonModule
	],
	declarations: [AccountComponent],
	providers: []
})
export class AccountModule {}
