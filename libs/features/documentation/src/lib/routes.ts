import { Route } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

export const DOCUMENTATION_ROUTES: Route[] = [
	{ path: '', component: DocumentationComponent },
	{
		path: 'change-pattern-proposal-template',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationChangePatternProposalTemplateComponent
			),
		title: 'Change pattern proposal template and documentation'
	},
	{
		path: 'component-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationComponentExampleComponent
			),
			title: 'Angular component example and documentation'
	},
	{
		path: 'component-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationComponentWorkflowComponent
			),
			title: 'Angular component workflow documentation'
	},
	{
		path: 'development-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationDevelopmentWorkflowComponent
			),
			title: 'Development workflow and documentation'
	},
	{
		path: 'environment-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationEnvironmentSetupComponent
			),
			title: 'Environment setup documentation'
	},
	{
		path: 'feature-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFeatureExampleComponent
			),
			title: 'Angular feature example and documentation'
	},
	{
		path: 'feature-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFeatureWorkflowComponent
			),
			title: 'Angular feature workflow documentation'
	},
	{
		path: 'firebase-authentication',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseAuthenticationComponent
			),
			title: 'Firebase authentication documentation'
	},
	{
		path: 'firebase-hosting',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseHostingComponent
			),
			title: 'Firebase hosting documentation'
	},
	{
		path: 'firebase-project-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirebaseProjectSetupComponent
			),
			title: 'Firebase project setup documentation'
	},
	{
		path: 'firestore-database',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFirestoreDatabaseComponent
			),
			title: 'Firestore database setup documentation'
	},
	{
		path: 'function-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFunctionExampleComponent
			),
			title: 'Google Cloud Function example and documentation'
	},
	{
		path: 'function-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationFunctionWorkflowComponent
			),
			title: 'Google Cloud Function workflow documentation'
	},
	{
		path: 'icon-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationIconWorkflowComponent
			),
			title: 'Icon workflow documentation'
	},
	{
		path: 'introduction',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationIntroductionComponent
			),
			title: 'Introduction information and documentation for the Full Stack Typescript repository'
	},
	{
		path: 'naming-conventions',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationNamingConventionsComponent
			),
			title: 'NAming convention documentation'
	},
	{
		path: 'new-pattern-proposal-template',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationNewPatternProposalTemplateComponent
			),
			title: 'New pattern proposal template documentation'
	},
	{
		path: 'single-responsibility-principle',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationSingleResponsibilityComponent
			),
			title: 'Single responsibility principle documentation'
	},
	{
		path: 'pwa-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationPwaWorkflowComponent
			),
			title: 'Progressive Web Application implementation and workflow documentation'
	},
	{
		path: 'request-for-changes',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationRequestForChangesComponent
			),
			title: 'Request for changes documentation'
	},
	{
		path: 'secret-manager-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationSecretManagerWorkflowComponent
			),
			title: 'Google Secret Manager documentation'
	},
	{
		path: 'web3-example',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWeb3ExampleComponent
			),
			title: 'Web3 example and documentation'
	},
	{
		path: 'web3-workflow',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWeb3WorkflowComponent
			),
			title: 'Web3 workflow documentation'
	},
	{
		path: 'workspace-setup',
		loadComponent: () =>
			import('./containers').then(
				(x) => x.DocumentationWorkspaceSetupComponent
			),
			title: 'Workspace setup and getting started documentation'
	}
];
