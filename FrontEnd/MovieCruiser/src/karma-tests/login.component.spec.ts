import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../app/login/login.component';
import { AlertService } from '../app/services/alert.service';
class Dummy {}
describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [LoginComponent],
				imports: [
					FormsModule,
					HttpModule,
					RouterTestingModule.withRoutes([
						{ path: 'register', component: Dummy }
					])
				],
				providers: [AlertService]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});