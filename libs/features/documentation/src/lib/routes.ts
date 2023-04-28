import { Route } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

export const DOCUMENTATION_ROUTES: Route[] = [
	{ path: '', component: DocumentationComponent },
	{
		path: 'change-pattern-proposal-template',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationChangePatternProposalTemplateComponent
			)
	},
	{
		path: 'component-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationComponentExampleComponent
			)
	},
	{
		path: 'component-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationComponentWorkflowComponent
			)
	},
	{
		path: 'development-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationDevelopmentWorkflowComponent
			)
	},
	{
		path: 'environment-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationEnvironmentSetupComponent
			)
	},
	{
		path: 'feature-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFeatureExampleComponent
			)
	},
	{
		path: 'feature-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFeatureWorkflowComponent
			)
	},
	{
		path: 'firebase-authentication',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseAuthenticationComponent
			)
	},
	{
		path: 'firebase-hosting',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseHostingComponent
			)
	},
	{
		path: 'firebase-project-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseProjectSetupComponent
			)
	},
	{
		path: 'firestore-database',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirestoreDatabaseComponent
			)
	},
	{
		path: 'function-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFunctionExampleComponent
			)
	},
	{
		path: 'function-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFunctionWorkflowComponent
			)
	},
	{
		path: 'icon-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationIconWorkflowComponent
			)
	},
	{
		path: 'introduction',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationIntroductionComponent
			)
	},
	{
		path: 'naming-conventions',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationNamingConventionsComponent
			)
	},
	{
		path: 'new-pattern-proposal-template',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationNewPatternProposalTemplateComponent
			)
	},
	{
		path: 'single-responsibility-principle',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationSingleResponsibilityComponent
			)
	},
	{
		path: 'pwa-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationPwaWorkflowComponent
			)
	},
	{
		path: 'request-for-changes',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationRequestForChangesComponent
			)
	},
	{
		path: 'secret-manager-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationSecretManagerWorkflowComponent
			)
	},
	{
		path: 'web3-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWeb3ExampleComponent
			)
	},
	{
		path: 'web3-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWeb3WorkflowComponent
			)
	},
	{
		path: 'workspace-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWorkspaceSetupComponent
			)
	}
];
