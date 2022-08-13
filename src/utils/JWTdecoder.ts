import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/token';

const JWTdecoder = (token:string | null): TokenPayload =>{
	const decoder = jwt.decode(token as string);

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