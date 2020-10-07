import { AxiosResponse } from 'axios';
import BaseService from './BaseService';

const API_KEY: string = process.env.REACT_APP_API_KEY || '';
const CX: string = process.env.REACT_APP_CX || '';

class GoogleService extends BaseService {
	readonly endpoint = 'customsearch/v1';

	constructor() {
		super('https://www.googleapis.com/');
	}

	search = async (q: string): Promise<AxiosResponse> => {
		const queryString = new URLSearchParams();

		queryString.set('key', API_KEY);
		queryString.set('cx', CX);
		queryString.set('q', q);

		const path = `${this.endpoint}?${queryString}`;

		return this.get(path);
	};
}

export default GoogleService;
