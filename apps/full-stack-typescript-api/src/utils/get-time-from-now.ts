export async function getTimeFromNow(prevTime) {
	const serverTimestamp = admin.firestore.Timestamp.now();

	const newDate = serverTimestamp
		.toDate()
		.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
	const currentDate = new Date(newDate);
	const currentDateValue = currentDate.valueOf();

	const prevBoostCollectDate = prevTime
		.toDate()
		.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
	const prevBoostDate = new Date(prevBoostCollectDate);
	const prevBoostDateValue = prevBoostDate.valueOf();

	const time = currentDateValue - prevBoostDateValue;

	return time;
}
