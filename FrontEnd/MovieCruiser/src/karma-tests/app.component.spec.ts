import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app/app.component';
import { SearchService } from '../app/services/search.service';
class Dummy {}
describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [AppComponent],
				imports: [RouterTestingModule, HttpModule, FormsModule],
				providers: [SearchService],
				schemas: [NO_ERRORS_SCHEMA]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});
	it(
		'should create the app',
		async(() => {
			expect(component).toBeTruthy();
		})
	);
	it(
		`should have as title 'app'`,
		async(() => {
			expect(component.title).toEqual('Movie Cruiser');
		})
	);
});