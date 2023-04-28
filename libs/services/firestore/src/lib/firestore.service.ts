import { Injectable } from '@angular/core';
import {
	Action,
	AngularFirestore,
	AngularFirestoreCollection,
	AngularFirestoreDocument,
	DocumentChangeAction,
	DocumentSnapshotDoesNotExist,
	DocumentSnapshotExists
} from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
	providedIn: 'root'
})
export class FirestoreService {
	constructor(protected afs: AngularFirestore) {}

	/// **************
	/// Get a Reference
	/// **************

	col<T>(
		ref: CollectionPredicate<T>,
		queryFn?: any
	): AngularFirestoreCollection<T> {
		return typeof ref === 'string'
			? this.afs.collection<T>(ref, queryFn)
			: ref;
	}

	doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
		return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
	}

	/// **************
	/// Get Data
	/// **************

	doc$<T>(ref: DocPredicate<T>): Observable<T> {
		return this.doc(ref)
			.snapshotChanges()
			.pipe(
				map(
					(
						doc: Action<
							| DocumentSnapshotDoesNotExist
							| DocumentSnapshotExists<T>
						>
					) => {
						return doc.payload.data() as T;
					}
				)
			);
	}

	col$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<T[]> {
		return this.col(ref, queryFn)
			.snapshotChanges()
			.pipe(
				map((docs: DocumentChangeAction<T>[]) => {
					return docs.map((a: DocumentChangeAction<T>) =>
						a.payload.doc.data()
					) as T[];
				})
			);
	}

	// Firebase Server Timestamp
	get timestamp() {
		return firebase.default.firestore.FieldValue.serverTimestamp();
	}

	// Set a document
	set<T>(ref: DocPredicate<T>, data: any): Promise<void> {
		const timestamp = this.timestamp;
		return this.doc(ref).set({
			...data,
			updatedAt: timestamp,
			createdAt: timestamp
		});
	}
}
