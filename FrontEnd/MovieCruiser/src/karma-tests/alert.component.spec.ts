import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from '../app/alert/alert.component';
import { AlertService } from '../app/services/alert.service';
describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [AlertComponent],
				imports: [RouterTestingModule],
				providers: [AlertService]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});