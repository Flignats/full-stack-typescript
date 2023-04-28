const { firestoreInstance } = require('./admin');

export async function getUserFromDisplayName(name: string) {
	const lName = name.toLowerCase();
	const displayNameDoc = firestoreInstance.doc('displayNames/' + lName);

	return await displayNameDoc.get().then((snapshot) => {
		if (!snapshot.exists) {
			console.log('Display name not found!');
			return undefined;
		} else {
			return snapshot.data();
		}
	});
}
