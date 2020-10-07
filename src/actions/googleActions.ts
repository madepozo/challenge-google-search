/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';

import { ActionType } from 'models/ActionType';
import GoogleService from 'services/GoogleService';

export const CLEAR_GOOGLE_SEARCH = 'CLEAR_GOOGLE_SEARCH';
export const GOOGLE_SEARCH_ERROR = 'GOOGLE_SEARCH_ERROR';
export const GOOGLE_SEARCH_SUCCESS = 'GOOGLE_SEARCH_SUCCESS';
export const GOOGLE_SEARCHING = 'GOOGLE_SEARCHING';

const googleService = new GoogleService();

export const googleCustomSearch = (query: string) => async (
	dispatch
): Promise<any> => {
	dispatch({ type: GOOGLE_SEARCHING, payload: null });

	try {
		const response = await googleService.search(query);

		dispatch({
			type: GOOGLE_SEARCH_SUCCESS,
			payload: {
				searchResults: response.data.items.map((item) => {
					const { title, snippet, link, cacheId = uuidv4() } = item;

					return { title, snippet, link, cacheId };
				}),
			},
		});
	} catch (error) {
		console.error(error);

		dispatch({
			type: GOOGLE_SEARCH_ERROR,
			payload: {
				msg: 'Oops, could not find what you were searching for!',
			},
		});
	}
};

export const clearGoogleCustomSearch = (): ActionType => {
	return {
		type: CLEAR_GOOGLE_SEARCH,
		payload: null,
	};
};
