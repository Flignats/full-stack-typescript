import { User } from '../user';

export interface AccountState extends User {
	error?: any;
	isLoaded: boolean;
	isLoading: boolean;
}
