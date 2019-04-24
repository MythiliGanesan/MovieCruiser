import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import {
	BaseRequestOptions,
	Http,
	HttpModule,
	RequestMethod,
	Response,
	ResponseOptions,
	XHRBackend
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs-observable';
import { MovieHttpClient } from "../app/services/moviehttpclient.service";
import { MoviesService } from '../app/services/movie.service';
describe('Http-SearchService (mockBackend)', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [],
				imports: [HttpModule, RouterTestingModule],
				providers: [
					MoviesService,
					{ provide: XHRBackend, useClass: MockBackend }
				]
			}).compileComponents();
		})
	);
	it(
		'can instantiate service when inject service',
		inject([MoviesService], (service: MoviesService) => {
			expect(service instanceof MoviesService).toBe(true);
		})
	);
	it(
		'can instantiate service with "new"',
		inject([Http], (http: MovieHttpClient) => {
			expect(http).not.toBeNull('http should be provided');
			const service = new MoviesService(http);
			expect(service instanceof MoviesService).toBe(
				true,
				'new service should be ok'
			);
		})
	);
	it(
		'can provide the mockBackend as XHRBackend',
		inject([XHRBackend], (backend: MockBackend) => {
			expect(backend).not.toBeNull('backend should be provided');
		})
	);
});