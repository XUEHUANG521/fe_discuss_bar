import styles from './UserIcon.module.scss';
import userIcon from '../../../image/userIcon.png';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hook';
import { selectUserName } from '../../../store/user';
import { clearStorage } from '../../../utils/localStorage';



const UserIcon = () => {
	const navigate = useNavigate();
	const username = useAppSelector(selectUserName);
	const logout =  () => {
		console.log('I clicked');
		clearStorage();
		navigate(0);
	}
	return(
		<>
		<img src={userIcon} alt="user icon" className={styles.icon}></img>
		<p className={styles.profile}>  Welcome, {username}</p>
		<button className={`${styles.button} ${styles.login_button}`} onClick={logout}>Log Out</button>
		</>
	)
}

export default UserIcon;