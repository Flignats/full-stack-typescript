import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Web3Component } from './web3.component';

const routes: Routes = [
	{
		path: '',
		component: Web3Component,
		resolve: []
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Web3RoutingModule {}
