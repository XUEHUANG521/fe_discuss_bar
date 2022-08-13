import styles from './Header.module.scss';
import ProfileHeader from '../Profile/ProfileHeader/ProfileHeader';
import SideMenu from '../SideMenu/SideMenu';
// import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<>
		<div className={styles.container}>
			<Navigation/>
			<ProfileHeader/>
		</div>
		<div className={styles.mobile_container}>
			<SideMenu/>
		</div>
		</>
	)
}

export default Header;