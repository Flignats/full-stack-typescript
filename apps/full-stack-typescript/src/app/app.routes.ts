import { Route } from '@angular/router';
import { AboutComponent } from '@full-stack-typescript/features/about';
import { AccountComponent } from '@full-stack-typescript/features/account';
import { isAuthenticatedGuard } from '@full-stack-typescript/guards/authentication';
import { accountLoadedResolver } from '@full-stack-typescript/resolvers/account';

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full'
	},
	{
		path: 'about',
		component: AboutComponent,
		title: 'About - Full Stack Typescript'
	},
	{
		path: 'account',
		canActivate: [isAuthenticatedGuard],
		resolve: { account: accountLoadedResolver },
		component: AccountComponent,
		title: 'Account Details - Full Stack Typescript'
	},
	{
		path: 'documentation',
		loadChildren: () =>
			import('@full-stack-typescript/features/documentation').then(
				(m) => m.DOCUMENTATION_ROUTES
			),
		title: 'Documentation - Full Stack Typescript'
	},
	{
		path: 'forgot-password',
		loadComponent: () =>
			import('@full-stack-typescript/features/forgot-password').then(
				(m) => m.ForgotPasswordComponent
			),
		title: 'Forgot Password - Full Stack Typescript'
	},
	{
		path: 'icon-examples',
		loadComponent: () =>
			import('@full-stack-typescript/features/icon-examples').then(
				(m) => m.IconExamplesComponent
			),
		title: 'Icon Examples - Full Stack Typescript'
	},
	{
		path: 'login',
		loadComponent: () =>
			import('@full-stack-typescript/features/login').then(
				(m) => m.LoginComponent
			),
		title: 'Login - Full Stack Typescript'
	},
	{
		path: 'sign-up',
		loadComponent: () =>
			import('@full-stack-typescript/features/sign-up').then(
				(m) => m.SignUpComponent
			),
		title: 'Sign Up - Full Stack Typescript'
	},
	{
		path: 'verify-email',
		canActivate: [isAuthenticatedGuard],
		loadComponent: () =>
			import('@full-stack-typescript/features/verify-email').then(
				(m) => m.VerifyEmailComponent
			),
		title: 'Verify Email - Full Stack Typescript'
	},
	{
		path: 'web3',
		loadChildren: () =>
			import('@full-stack-typescript/features/web3').then(
				(m) => m.Web3Module
			),
		title: 'Web3 Examples - Full Stack Typescript'
	},
	{
		path: '**',
		redirectTo: 'about',
		pathMatch: 'full'
	}
];
