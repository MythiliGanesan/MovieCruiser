import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from '../app/register/register.component';
import { AlertService } from '../app/services/alert.service';
class Dummy {}
describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [RegisterComponent],
				imports: [
					FormsModule,
					HttpModule,
					RouterTestingModule.withRoutes([{ path: 'login', component: Dummy }])
				],
				providers: [AlertService]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});