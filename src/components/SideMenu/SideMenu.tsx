import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.module.scss';
const SideMenu = ()=> {
	const [show, setshow] = useState(false);
	const handleClick = () => {
		console.log('I clicked');
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
					<Link to='/login' className={`${styles.link} ${styles.login_button}`}>Login</Link>
					<Link to='/signup' className={`${styles.link} ${styles.register_button}`}>SignUp</Link>
					<Link to='/' className={styles.link}>A</Link>
				</div>
			)}
		</>
	)
}

export default SideMenu;