import { useAuth } from '../../../Hooks/useAuth'
import Hamburger from '../Hamburger/Hamburger'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'

const Header = ({ backlink }) => {
	/*TODO: rect router usehistory */

	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color='white' />
			</button>
			{/*user profile*/}
			<Hamburger />
		</header>
	)
}
export default Header
