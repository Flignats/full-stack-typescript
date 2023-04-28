import * as admin from 'firebase-admin';
import { getDocData } from '../../utils/get-doc-data';

const firestoreInstance = admin.firestore();

export async function onUpdateAccountTokens(data: string, context) {
	const batch = firestoreInstance.batch(); // Get a new write batch
	const serverTimestamp = admin.firestore.Timestamp.now();
	const token = data;
	const uid = context.auth.uid;

	const userDoc = firestoreInstance.collection('users').doc(uid);
	const userDocData = await getDocData(userDoc);
	const currentTokens = userDocData.fcmTokens || {};
	const updatedTokens = { ...currentTokens, [token]: true };

	batch.set(
		userDoc,
		{
			...userDocData,
			fcmTokens: updatedTokens,
			updatedAt: serverTimestamp
		},
		{ merge: true }
	);

	return batch.commit();
}
