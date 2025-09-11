import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../Hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backlink }) => {
	/*TODO: rect router usehistory */

	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill='#fff' fontSize={28} />
			</button>
			{/*user profile*/}
			<Hamburger />
		</header>
	)
}
export default Header
