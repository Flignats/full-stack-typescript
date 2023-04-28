import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointFacade } from '@full-stack-typescript/features/breakpoint';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'full-stack-typescript-documentation-component-example',
	standalone: true,
	imports: [CommonModule, HighlightModule],
	templateUrl: './documentation-component-example.component.html',
	styleUrls: ['../../styles/documentation.scss']
})
export class DocumentationComponentExampleComponent {
	private breakpointFacade = inject(BreakpointFacade);

	appComponentCode = `
<div class="theme-wrapper">
    <div class="wrapper">
        <div class="toolbar">
            <full-stack-typescript-app-toolbar></full-stack-typescript-app-toolbar>
        </div>
        <div class="content">
            <router-outlet #o="outlet"></router-outlet>
        </div>
    </div>
</div>
	`;
	appServeCode = `nx serve full-stack-typescript`;
	appStylesCode = `
.toolbar {
	position: fixed;
	width: 100%;
	display: flex;
	z-index: 10;
}
	`;
	appToolbarComponentCode = `

@Component({
	selector: 'full-stack-typescript-app-toolbar',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		MatDividerModule,
		MatMenuModule,
		MatToolbarModule,
	],
	templateUrl: './app-toolbar.component.html',
	styleUrls: ['./app-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent {}
	`;
	appToolbarModuleCode = `
	import { AppComponent } from './app.component';

	@NgModule({
		...
		imports: [
			...
			AppToolbarComponent
		],
		...
	})
	export class AppModule {}
	`;
	appToolbarScssCode = `
:host {
	width: 100%;
}

.toolbar-spacer {
	flex: 1 1 auto;
}

.toolbar-link {
	margin: 0 1em;
}
	`;
	appToolbarTemplateCode = `
<mat-toolbar color="primary">
    <span routerLink="about">Full Stack Typescript</span>
    <span class="toolbar-spacer"></span>
    <span class="toolbar-link" [matMenuTriggerFor]="authMenu">Authentication</span>
    <mat-menu #authMenu="matMenu">
        <button mat-menu-item routerLink="login">Login</button>
        <button mat-menu-item routerLink="sign-up">Sign Up</button>
        <mat-divider></mat-divider>
        <mat-divider></mat-divider>
        <button mat-menu-item routerLink="forgot-password">Forgot Password</button>
        <button mat-menu-item routerLink="verify-email">Verify Email</button>
        <mat-divider></mat-divider>
        <mat-divider></mat-divider>
        <button mat-menu-item routerLink="account">Account</button>
    </mat-menu>
    <span class="toolbar-link">Github</span>
</mat-toolbar>
	`;
	currentView$ = this.breakpointFacade.currentView$;
	generateComponentLibrary = `nx g lib --name=app-toolbar --directory=libs/components --changeDetection=OnPush --flat --standalone --style=scss`;
	initComponent = `

@Component({
	selector: 'full-stack-typescript-app-toolbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app-toolbar.component.html',
	styleUrls: ['./app-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent {}
	`;
}
