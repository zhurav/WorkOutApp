import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button.jsx'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout.jsx'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<h1 className={styles.heading}>Best Workout App for YOU!</h1>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			{/*TODO: Counters*/}
		</Layout>
	)
}

export default Home
