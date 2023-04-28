import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-pwa-workflow',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-pwa-workflow.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationPwaWorkflowComponent {
	private breakpointFacade = inject(BreakpointFacade);

	appIconLocation = `apps/{{project}}/src/assets/icons`;
	appIndexLocation = `apps/{{project}}/src/index.html`;
	appModuleCode = `
		...
	import { isDevMode, ... } from '@angular/core';
	import { ServiceWorkerModule } from '@angular/service-worker';

	@NgModule({
		...
		imports: [
			...
			ServiceWorkerModule.register('ngsw-worker.js', {
				enabled: !isDevMode(),
				// Register the ServiceWorker as soon as the application is stable
				// or after 30 seconds (whichever comes first).
				registrationStrategy: 'registerWhenStable:30000'
			}),
		...
	`;
	currentView$ = this.breakpointFacade.currentView$;
	indexManifest = `
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#1976d2">
	`;
	ngswCode = `
	{
		"$schema": "../../../node_modules/@angular/service-worker/config/schema.json",
		"index": "/index.html",
		"assetGroups": [
			{
				"name": "app",
				"installMode": "prefetch",
				"resources": {
					"files": [
						"/favicon.ico",
						"/index.html",
						"/manifest.webmanifest",
						"/*.css",
						"/*.js"
					]
				}
			},
			{
				"name": "assets",
				"installMode": "lazy",
				"updateMode": "prefetch",
				"resources": {
					"files": [
						"/assets/**",
						"/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
					]
				}
			}
		]
	}
	`;
	ngswLocation = `apps/{{project}}/src/ngsw-config.json`;
	projectJsonCode = `
	...
	"assets": [
		...
		"apps/{{project}}/src/manifest.webmanifest",
		...
	],
	...
	"serviceWorker": true,
	"ngswConfigPath": "apps/full-stack-typescript/src/ngsw-config.json"
	},
	`;
	serviceWorkerPackage = `"@angular/service-worker": "^15.2.0",`;
	webManifestCode = `
	{
		"name": "{{project}}",
		"short_name": "{{project}}",
		"theme_color": "#1976d2",
		"background_color": "#fafafa",
		"display": "standalone",
		"scope": "./",
		"start_url": "./",
		"icons": [
			{
				"src": "assets/icons/icon-72x72.png",
				"sizes": "72x72",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-96x96.png",
				"sizes": "96x96",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-128x128.png",
				"sizes": "128x128",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-144x144.png",
				"sizes": "144x144",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-152x152.png",
				"sizes": "152x152",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-192x192.png",
				"sizes": "192x192",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-384x384.png",
				"sizes": "384x384",
				"type": "image/png",
				"purpose": "maskable any"
			},
			{
				"src": "assets/icons/icon-512x512.png",
				"sizes": "512x512",
				"type": "image/png",
				"purpose": "maskable any"
			}
		]
	}
	`;
	webManifestLocation = `apps/{{project}}/src/manifest.webmanifest`;
}
