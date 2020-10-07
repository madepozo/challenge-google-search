import { GoogleResultItem } from './GoogleResultItem';

export interface GoogleSearchState {
	error: {};
	loading: boolean;
	searchResults: GoogleResultItem[];
}
