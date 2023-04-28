import { Timestamp } from '@google-cloud/firestore';

export interface User {
	createdAt?: Timestamp;
	displayName?: string;
	email?: string;
	fcmTokens?: { [token: string]: true };
	githubURL?: string;
	phoneNumber?: string;
	photoURL?: string;
	refreshToken?: string;
	uid?: string;
	updatedAt?: Timestamp;
}
