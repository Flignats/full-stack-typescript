import { Injectable } from '@angular/core';
import { Web3Balance } from '@full-stack-typescript/models';
import { MoralisService } from '@full-stack-typescript/services/moralis';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import * as web3Actions from './web3.actions';

@Injectable()
export class Web3Effects {
	constructor(
		private actions$: Actions,
		private moralisService: MoralisService
	) {}

	loadBalance$ = createEffect(() =>
		this.actions$.pipe(
			ofType(web3Actions.loadBalance),
			exhaustMap(({ address }) =>
				this.moralisService.getBalance(address).pipe(
					map((balance: Web3Balance) => {
						return web3Actions.loadBalanceSuccess({ balance });
					}),
					catchError((error) =>
						of(web3Actions.loadBalanceFailure({ error }))
					)
				)
			)
		)
	);
}
