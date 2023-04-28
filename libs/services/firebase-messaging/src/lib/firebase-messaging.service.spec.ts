import { TestBed } from '@angular/core/testing';

import { FirebaseMessagingService } from './firebase-messaging.service';

describe('FirebaseMessagingService', () => {
	let service: FirebaseMessagingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FirebaseMessagingService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
