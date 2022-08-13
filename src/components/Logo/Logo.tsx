import logo from '../../image/logo.svg';
import styles from  './Logo.module.scss';


const Logo = () => {
	return (
		<>
			<img src={logo} alt='Xdiscussion logo' className={styles.logo}></img>
		</>
	)
}

export default Logo;