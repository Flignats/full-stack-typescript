import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	createUrlTreeFromSnapshot,
	Router
} from '@angular/router';
import { AuthFacade } from '@full-stack-typescript/features/auth';
import { map } from 'rxjs';

export const isAuthenticatedGuard = (next: ActivatedRouteSnapshot) => {
	return inject(AuthFacade).isAuthenticated$.pipe(
		map((isAuthenticated) =>
			isAuthenticated
				? true
				: createUrlTreeFromSnapshot(next, ['/', 'login'])
		)
	);
};
