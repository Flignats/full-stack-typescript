const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const firestoreInstance = admin.firestore();

module.exports = {
	firestoreInstance
};
