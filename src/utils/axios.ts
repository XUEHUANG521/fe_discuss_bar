import axios, {AxiosRequestConfig}from 'axios';

const url_prefix  = () => {
	//url prefix for axios requires, it changed based on environment
	let environment = process.env.NODE_ENV;

	switch (environment) {
		case 'production':
			return  'http://localhost:8000';
		default:
			return 'http://localhost:8000';
	}
}

const baseUrl = `${url_prefix()}/`;

export default function authAxios(options: AxiosRequestConfig) {
		const instance = axios.create({
			baseURL: baseUrl,
			timeout: 50000,
		})

		return instance(options);
}