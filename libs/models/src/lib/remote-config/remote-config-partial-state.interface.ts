import { REMOTE_CONFIG_FEATURE_KEY } from '@full-stack-typescript/constants';
import { RemoteConfigState } from './remote-config-state.interface';

export interface RemoteConfigPartialState {
	readonly [REMOTE_CONFIG_FEATURE_KEY]: RemoteConfigState;
}
