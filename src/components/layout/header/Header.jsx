import { ImUser } from 'react-icons/im'
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../Hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backlink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			{pathname != '/' ? (
				<button
					onClick={() => {
						navigate(backlink)
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={28} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<ImUser fill='#fff' fontSize={28} />
				</button>
			)}
			{/*user profile*/}
			<Hamburger />
		</header>
	)
}
export default Header
