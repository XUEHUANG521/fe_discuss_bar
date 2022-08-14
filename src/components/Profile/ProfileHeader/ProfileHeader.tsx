import {useNavigate } from "react-router-dom";
import styles from './ProfileHeader.module.scss';
import UserIcon from "../userIcon/UserIcon";
import { useAppSelector } from '../../../store/hook';
import { selectToken } from '../../../store/user';
import { useEffect, useState } from "react";

const ProfileHeader = ()=> {
	const token = useAppSelector(selectToken);
	const [isAuth, setIsAuth] = useState(token === '' ? false : true);

	useEffect(()=> {
		if(token === '') {
			setIsAuth(false)
		} else {
			setIsAuth(true)
		}
	}, [token])
	const navigate = useNavigate();
	return (
		<div className={`${styles.container}`}>
			{!isAuth && 
				(<div className={`${styles.container}`}>
					<button className={`${styles.button} ${styles.register_button}`} onClick={() => navigate('/signup')}>Sign up</button>
					<button className={`${styles.button} ${styles.login_button}`} onClick={() => navigate('/login')}>Log in</button>
				</div>)

			}
			{isAuth &&  
			(
				<UserIcon/>
			)}
			
		</div>
	)
}

export  default ProfileHeader;