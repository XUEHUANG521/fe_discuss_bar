import jwt_decode from 'jwt-decode';
import { TokenPayload } from '../types/token';
import { clearStorage } from './localStorage';

const JWTdecoder = (token:string):TokenPayload =>{
	const decoder:TokenPayload = jwt_decode(token);
	const exp:number | null = decoder.exp;
	const isExpired = Date.now() - (exp as number) * 1000 > 0;

	console.log('Expired? '+ isExpired);
	// 
	
	if(isExpired) {
		clearStorage();
	}

	if(!decoder) {
		return {
			token: null,
			username: null,
			role: null,
			exp: null,
		}
	}
	return decoder as TokenPayload;
	
	
}

export default JWTdecoder;