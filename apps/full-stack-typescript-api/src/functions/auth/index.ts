import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth';

const {
	firestoreInstance
	// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../../utils/admin');

export async function onNewUserCreated(user: UserRecord, context) {
	const serverTimestamp = admin.firestore.Timestamp.now();
	const batch = firestoreInstance.batch(); // Get a new write batch

	const newUserDoc = firestoreInstance.collection('users').doc(user.uid); // Get paths

	batch.set(
		newUserDoc,
		{
			createdAt: serverTimestamp,
			displayName: user.displayName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			uid: user.uid,
			updatedAt: serverTimestamp
		},
		{ merge: true }
	);

	return batch.commit();
}
