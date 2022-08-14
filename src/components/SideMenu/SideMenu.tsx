import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import { useAppSelector } from '../../store/hook';
import { selectToken } from '../../store/user';
import UserIcon from '../Profile/userIcon/UserIcon';
const SideMenu = ()=> {
	const [show, setshow] = useState(false);
	const token = useAppSelector(selectToken);
	const [isAuth, setIsAuth] = useState(token === '' ? false : true);

	useEffect(()=> {
		if(token === '') {
			setIsAuth(false)
		} else {
			setIsAuth(true)
		}
	}, [token])
	const handleClick = () => {
		setshow(!show);
	}
	return (
		<>
			<div className={styles.custom_navbar} onClick={handleClick}>
				<span></span>
				<span></span>
				<span></span>
			</div> 
			{show  && (
				<div className={styles.sideBar}>
					<Link to="/addpost" className={styles.link}>Post</Link>
					<Link to="/about" className={styles.link}>About</Link>
					<Link to='/category' className={styles.link}>Category</Link>
					{!isAuth && <>
						<Link to='/login' className={`${styles.link} ${styles.login_button}`}>Login</Link>
						<Link to='/signup' className={`${styles.link} ${styles.register_button}`}>SignUp</Link>
					</>}
					{isAuth && <UserIcon/>}
				</div>
			)}
		</>
	)
}

export default SideMenu;