import {TextField, Grid} from '@mui/material';
import styles from './Login.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import PasswordIcon from '@mui/icons-material/Password';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {makeStyles} from '@material-ui/styles';

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
	const classes = useStyles();
	const[showPassword, setShowPassword] = useState(false);
	const[isLoading, setIsLoading] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	}
	return (
		<>
		<Grid container className={styles.container}>
			<Grid item md={4} className={styles.background}></Grid>
			<Grid item xs={12} md={8} className={styles.content}>
				<div className={styles.wrapper}>
					<h1>Log in</h1>
					<TextField
					required
					margin='normal'
					label="UserName" 
					variant="outlined"
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
					type={showPassword ? 'password' : 'text'}
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
					 className={classes.button}
					 >Log in</Button>
					}
				</div>
			</Grid>
		</Grid>
		</>
	)
}

export default LoginPage;