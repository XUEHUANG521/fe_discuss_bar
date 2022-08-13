export interface user {
	username: string | null;
	email: string | null,
	role: string | null,
	token: string | null,
}
export interface token {
	token: string | null
}

export interface userLoginForm {
	username: string;
	password: string;   
}
export interface userRegisterForm {
	username: string;
	password: string;
	email: string;
}