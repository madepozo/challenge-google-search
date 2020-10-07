import {
	CLEAR_GOOGLE_SEARCH,
	GOOGLE_SEARCH_ERROR,
	GOOGLE_SEARCH_SUCCESS,
	GOOGLE_SEARCHING,
} from 'actions/googleActions';
import { ActionType } from 'models/ActionType';
import { GoogleSearchState } from 'models/GoogleSearchState';

const initialState: GoogleSearchState = {
	searchResults: [],
	loading: false,
	error: {},
};

export const googleSearchReducer = (
	state = initialState,
	{ type, payload }: ActionType
): GoogleSearchState => {
	switch (type) {
		case GOOGLE_SEARCHING:
			return {
				...state,
				loading: true,
			};
		case GOOGLE_SEARCH_SUCCESS:
			return {
				...state,
				error: {},
				loading: false,
				searchResults: payload.searchResults,
			};
		case GOOGLE_SEARCH_ERROR:
			return {
				...state,
				error: payload.error,
				loading: false,
			};
		case CLEAR_GOOGLE_SEARCH:
			return {
				...state,
				error: {},
				loading: false,
				searchResults: [],
			};
		default:
			return state;
	}
};
