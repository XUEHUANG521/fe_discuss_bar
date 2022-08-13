import jwt_decode from 'jwt-decode';
import { TokenPayload } from '../types/token';

const JWTdecoder = (token:string): TokenPayload =>{
	const decoder = jwt_decode(token);

	console.log(decoder);

	if(!decoder) {
		return {
			token: null,
			username: null,
			role: null,
		}
	}
	return decoder as TokenPayload;
	
}

export default JWTdecoder;