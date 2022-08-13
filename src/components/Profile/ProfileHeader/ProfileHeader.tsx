import {useNavigate } from "react-router-dom";
import styles from './ProfileHeader.module.scss';
const ProfileHeader = ()=> {
	const navigate = useNavigate();
	return (
		<div className={`${styles.container}`}>
			<button className={`${styles.button} ${styles.register_button}`} onClick={() => navigate('/signup')}>Sign up</button>
      		<button className={`${styles.button} ${styles.login_button}`} onClick={() => navigate('/login')}>Log in</button>
		</div>
	)
}

export  default ProfileHeader;