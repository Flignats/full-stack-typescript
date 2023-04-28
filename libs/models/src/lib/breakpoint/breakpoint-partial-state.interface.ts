import { BREAKPOINT_FEATURE_KEY } from '@full-stack-typescript/constants';
import { BreakpointState } from './breakpoint-state.interface';

export interface BreakpointPartialState {
	readonly [BREAKPOINT_FEATURE_KEY]: BreakpointState;
}
