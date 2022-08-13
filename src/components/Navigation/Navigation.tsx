import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from './Navigation.module.scss';

const Navigation  = () => {
	return (
		<div className={styles.container}>
			<Logo/>
			<Link to="/addpost" className={styles.link}>Post</Link>
			<Link to="/" className={styles.link}>About</Link>
			<Link to='/' className={styles.link}>Category</Link>
			
		</div>
	)
}

export default Navigation;