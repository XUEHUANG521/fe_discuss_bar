import styles from './search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';
const searchBar =  () =>{ 
	return (
		<>
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Let's disscuss now!</h1>
				<div>
				<input className={styles.input} placeholder='search'></input>
				<IconButton className={styles.searchButton}>
					<SearchIcon className={styles.icon}/>
				</IconButton>
				</div>
				
			</div>
		</div>
		</>
	)
}

export default searchBar;