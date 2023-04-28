export async function getDocData(docRef) {
	const docSnap = await docRef.get();
	return docSnap.data();
}
