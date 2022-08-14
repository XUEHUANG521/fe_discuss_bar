import {TextField, Grid} from '@mui/material';
import styles from './Login.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import PasswordIcon from '@mui/icons-material/Password';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {makeStyles} from '@material-ui/styles';
import { userLogin } from '../../utils/services';
import { useNavigate } from 'react-router-dom';
import JWTdecoder from '../../utils/JWTdecoder';
import { useDispatcher } from '../../store/hook';
import { addUser, createCredential} from '../../store/user';
import { put as putStorage } from '../../utils/localStorage';

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


const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatcher();
	const classes = useStyles();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [userNamehelperText, setUserNamehelperText] = useState('');
	const [passwordhelperText, setpasswordhelperText] = useState('');
	const[showPassword, setShowPassword] = useState(false);
	const[isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUserNamehelperText('');
		setpasswordhelperText('');
		setIsLoading(true);

		const params = {
			username, password
		}
		userLogin(params)
		.then((res) => {
			console.log('login');
			const result = JWTdecoder(res.data.token);
			// console.log(result);
			dispatch(addUser(result));
			putStorage('user',result);
			dispatch(createCredential(JSON.parse(`{ "token": "${res.data.token}"}`)));
			putStorage('token', JSON.parse(`{ "token": "${res.data.token}"}`));
			setIsLoading(false);
			navigate('/')
	
		})
		.catch((error) => {
			setIsLoading(false);
			console.log(error);

		})
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
					<h1>Log in</h1>
					<TextField
					required
					margin='normal'
					label="Username or Email" 
					variant="outlined"
					error={Boolean(userNamehelperText)}
					helperText={userNamehelperText}
					onChange={(event)=>setUsername(event.target.value)}
					fullWidth
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
					margin='normal'
					required
					label="Password" 
					variant="outlined"
					onChange={(event)=>setPassword(event.target.value)}
					error={Boolean(passwordhelperText)}
					helperText={passwordhelperText}
					type={showPassword ? 'text' : 'password'}
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
						Log in
					</LoadingButton> :  
					 <Button 
					 variant="outlined"
					 type='submit'
					 className={classes.button}
					 >Log in</Button>
					}
				</form>
			</Grid>
		</Grid>
		</>
	)
}

export default LoginPage;