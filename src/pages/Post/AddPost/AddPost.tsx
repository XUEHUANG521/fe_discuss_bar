import {Grid} from "@mui/material";
import {TextField } from "@mui/material";
import styled from './AddPost.module.scss';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';


const AddPost = () => {
	const [isLoading, setIsLoading] = useState(false);
	return(
		<>
		<Grid container>
			<Grid item md={12} className={styled.container}>
				<form className={styled.wrapper}>
					<h1>ADD POST</h1>
					<TextField
					required
					margin='normal'
					label="Post Title" 
					variant="outlined"
					// error={Boolean(userNamehelperText)}
        			// helperText={userNamehelperText || ''}
					fullWidth
					// onChange={(event)=> setUserName(event.target.value)}
					// className={classes.input}
					/>
					<TextField
					required
					margin='normal'
					label="cateogory" 
					variant="outlined"
					// error={Boolean(userNamehelperText)}
        			// helperText={userNamehelperText || ''}
					fullWidth
					// onChange={(event)=> setUserName(event.target.value)}
					// className={classes.input}
					/>
					<TextField
					required
					margin='normal'
					label="Content" 
					variant="outlined"
					multiline
					// error={Boolean(userNamehelperText)}
        			// helperText={userNamehelperText || ''}
					fullWidth
					// onChange={(event)=> setUserName(event.target.value)}
					// className={classes.input}
					/>
					{isLoading  ?
					<LoadingButton loading variant="outlined">
						Log in
					</LoadingButton> :  
					 <Button 
					 variant="outlined"
					 type='submit'
					//  className={classes.button}
					 >Add</Button>
					}
				</form>
			</Grid>

		</Grid>
		</>
	)
}

export default AddPost;