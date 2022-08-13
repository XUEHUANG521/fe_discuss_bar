export const uppercaseValidation = (str:string) => {
	const reg = /[A-Z]/g;
	const result = reg.test(str)
	return result
}
export const lowercaseValidation = (str: string) => {
	const reg = /[a-z]/g;
	const result = reg.test(str)
	return result
}

export const numberValidation = (str:string) => {
	const reg = /[0-9]/g;
	const result = reg.test(str)
	return result
}
  
  
export const lengthValidation = (str:string, number:number) => {
	const strList = str.split('')
	return strList.length >= number;
}
	
  
export const emailValidation = (str:string) => {
	const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	const result = reg.test(str)
	return result;
}

/**
 * Validate password strength
 * @param password password to be validate
 * @returns validation result
 */
const validatePassword = (password: string): boolean => {
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*[\d@$~!%*^#?&+_-])[A-Za-z\d@$~!%*^#?&+_-]{8,32}$/;
	const passwordValidataResult = passwordRegex.test(password);
	return passwordValidataResult;
  };
