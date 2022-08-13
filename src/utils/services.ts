import authAxios from "./axios";
import { userLoginForm, userRegisterForm } from "../types/user";
import {AxiosRequestConfig} from 'axios';

export function userLogin(params: userLoginForm) {
	const config:AxiosRequestConfig = {
		url: 'login',
		method: 'GET',
		data:params,
	}

	return authAxios(config).then((res) => res.data);
}

export function userRegister(params: userRegisterForm) {
	const config:AxiosRequestConfig = {
		url: 'signup',
		method: 'POST',
		data: params,
	}

	return authAxios(config).then((res) => res.data);
}