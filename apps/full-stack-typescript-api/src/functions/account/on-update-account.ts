import { User } from '@full-stack-typescript/models';
import * as admin from 'firebase-admin';

const {
	firestoreInstance
	// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../../utils/admin');

export async function onUpdateAccount(data: User, context) {
	const batch = firestoreInstance.batch(); // Get a new write batch
	const serverTimestamp = admin.firestore.Timestamp.now();
	const uid = context.auth.uid;

	const userDoc = firestoreInstance.collection('users').doc(uid); // Get paths

	batch.update(
		userDoc,
		{
			...data,
			updatedAt: serverTimestamp
		},
		{ merge: true }
	);

	return batch.commit();
}
