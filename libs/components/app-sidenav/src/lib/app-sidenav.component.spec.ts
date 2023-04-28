import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSidenavComponent } from './app-sidenav.component';

describe('ComponentsAppSidenavComponent', () => {
	let component: AppSidenavComponent;
	let fixture: ComponentFixture<AppSidenavComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppSidenavComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AppSidenavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
