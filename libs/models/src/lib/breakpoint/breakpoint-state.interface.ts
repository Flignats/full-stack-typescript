import { BreakpointCurrentView } from './breakpoint-current-view.type';
import { BreakpointFailedMatch } from './breakpoint-failed-match.interface';

export interface BreakpointState {
	currentView: BreakpointCurrentView;
	failedMatch?: BreakpointFailedMatch;
	isXSmall: boolean;
	isSmall: boolean;
	isMedium: boolean;
	isLarge: boolean;
	isXLarge: boolean;
}
