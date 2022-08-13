import {TextField, Grid} from '@mui/material';
import styles from './SignUpPage.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import PasswordIcon from '@mui/icons-material/Password';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {makeStyles} from '@material-ui/styles';
import { userRegister } from '../../utils/services';
import { emailValidation, lengthValidation, numberValidation, uppercaseValidation,lowercaseValidation } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	input: {
	  margin:'20px',
	},
	button: {
		paddingLeft:'100px',
		paddingRight: '100px',
		paddingTop:'20px',
		paddingBottom: '20px',
		margin: '20px',
		backgroundColor:'skyblue',
		color:'black',
	}
  }));


const SignUpPage = () => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userNamehelperText, setUserNamehelperText] = useState('');
	const [emailhelperText, setemailhelperText] = useState('');
	const [passwordhelperText, setpasswordhelperText] = useState('');
	const[showPassword, setShowPassword] = useState(false);
	const[isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUserNamehelperText('');
		setemailhelperText('');
		setpasswordhelperText('');
		setIsLoading(true);
		if(!emailValidation(email)) {
			setIsLoading(false);
			return setemailhelperText('Please Provide vaild email address');
		}
		if(!numberValidation(password)) {
			setIsLoading(false);
			return setpasswordhelperText('Password should contain as least one Number');
		}

		if(!lengthValidation(password,8)) {
			setIsLoading(false);
			return setpasswordhelperText('Password should be greater than 8 letters');
		}

		if(!uppercaseValidation(password)) {
			setIsLoading(false);
			return setpasswordhelperText('Password should contain as least one UpperCase letter');
		}

		if(!lowercaseValidation(password)) {
			setIsLoading(false);
			return setpasswordhelperText('Password should contain as least one LowerCase  letter');
		}
		
		const params = {
			username, email, password
		}
		console.log(username);
		console.log(email);
		console.log(password);
		console.log(params);

		userRegister(params).then((res) => {
			console.log('res ' + JSON.stringify(res.data));
			setIsLoading(false);
			navigate('/')
		});
		
		console.log('register');
	}
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	}
	return (
		<>
		<Grid container className={styles.container}>
			<Grid item md={4} className={styles.background}></Grid>
			<Grid item xs={12} md={8} className={styles.content}>
				<form className={styles.wrapper} onSubmit={handleSubmit}>
					<h1>Register</h1>
					<TextField
					required
					margin='normal'
					label="UserName" 
					variant="outlined"
					error={Boolean(userNamehelperText)}
        			helperText={userNamehelperText || ''}
					fullWidth
					onChange={(event)=> setUserName(event.target.value)}
					className={classes.input}
					InputProps={{
						startAdornment: 
						<InputAdornment position="start">
							<IconButton>
								<PersonIcon/>
							</IconButton>
							</InputAdornment>,
					  }}
					/>
					<TextField
					required
					margin='normal'
					label="Email" 
					variant="outlined"
					fullWidth
					onChange={(event)=> setEmail(event.target.value)}
					error={Boolean(emailhelperText)}
        			helperText={emailhelperText || ''}
					className={classes.input}
					InputProps={{
						startAdornment: 
						<InputAdornment position="start">
							<IconButton>
								<EmailIcon/>
							</IconButton>
							</InputAdornment>,
					  }}
					/>
					<TextField
					margin='normal'
					required
					label="Password" 
					variant="outlined"
					error={Boolean(passwordhelperText)}
        			helperText={passwordhelperText || ''}
					type={showPassword ? 'text' : 'password'}
					onChange={(event)=> setPassword(event.target.value)}
					fullWidth
					className={classes.input}
					InputProps={{
						startAdornment: 
						<InputAdornment position="start">
							<IconButton>
								<PasswordIcon/>
							</IconButton>
							</InputAdornment>,
						endAdornment: (
							<InputAdornment position="end">
							  <IconButton
								onClick={handleClickShowPassword}
							  >
								{showPassword ? <Visibility /> : <VisibilityOff />}
							  </IconButton>
							</InputAdornment>
						),
					  }}
					/>
					{isLoading  ?
					<LoadingButton loading variant="outlined">
						Register
					</LoadingButton> :  
					 <Button 
					 type='submit'
					 variant="outlined"
					 className={classes.button}
					 >Register</Button>
					}
				</form>
			</Grid>
		</Grid>
		</>
	)
}

export default SignUpPage;