/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts(
	'https://www.gstatic.com/firebasejs/9.19.0/firebase-app-compat.js'
);
importScripts(
	'https://www.gstatic.com/firebasejs/9.19.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
	'apiKey': 'AIzaSyBFZXZaf6-Y1wEQrErq9K3S6vLbmQi1ea4',
	'appId': '1:1068134169350:web:c3ac876a729025bd81bc87',
	'projectId': 'fullstacktypescript',
	'messagingSenderId': '1068134169350'
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
