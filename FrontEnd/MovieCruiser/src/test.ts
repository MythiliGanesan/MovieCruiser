import { getTestBed } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy.js";
import "zone.js/dist/sync-test";

declare const __karma__: any;
declare const require: any;

__karma__.loaded = () => {};

getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

const context = require.context("./", true, /\.spec\.ts$/);

context.keys().map(context);

__karma__.start();