import { isDevMode, NgModule } from '@angular/core';
import {
	ScreenTrackingService,
	UserTrackingService
} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppFooterComponent } from '@full-stack-typescript/components/app-footer';
import { AppSidenavComponent } from '@full-stack-typescript/components/app-sidenav';
import { AppToolbarComponent } from '@full-stack-typescript/components/app-toolbar';
import { AboutModule } from '@full-stack-typescript/features/about';
import { AccountModule } from '@full-stack-typescript/features/account';
import { AuthModule } from '@full-stack-typescript/features/auth';
import { BreakpointModule } from '@full-stack-typescript/features/breakpoint';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	HIGHLIGHT_OPTIONS,
	HighlightModule,
	HighlightOptions
} from 'ngx-highlightjs';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, {
			initialNavigation: 'enabledBlocking'
		}),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		}),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireFunctionsModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireAnalyticsModule,
		StoreModule.forRoot(
			{ router: routerReducer },
			{
				metaReducers: [],
				runtimeChecks: {
					strictActionImmutability: true,
					strictStateImmutability: true
				}
			}
		),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AboutModule,
		AuthModule,
		AccountModule,
		AppFooterComponent,
		AppSidenavComponent,
		AppToolbarComponent,
		BreakpointModule,
		HighlightModule,
		MatSidenavModule
	],
	providers: [
		ScreenTrackingService,
		UserTrackingService,
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: <HighlightOptions>{
				lineNumbers: true,
				coreLibraryLoader: () => import('highlight.js/lib/core'),
				languages: {
					typescript: () =>
						import('highlight.js/lib/languages/typescript'),
					css: () => import('highlight.js/lib/languages/css'),
					xml: () => import('highlight.js/lib/languages/xml')
				}
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
