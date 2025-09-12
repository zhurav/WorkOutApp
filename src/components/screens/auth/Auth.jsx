import cn from 'clsx'
import { useState } from 'react'

import Button from '../../ui/button/Button.jsx'

import Layout from '../../layout/Layout.jsx'

import styles from './Login.module.scss'

//const [error, setError] = useState('')

const Auth = () => {
	const [showPass, setShowPass] = useState(false)
	const togglePassword = () => {
		setShowPass(prev => !prev)
	}
	return (
		<Layout
			bgImage='/images/home-bg.jpg'
			oberlay={0.45}
			bgSize='cover'
			bgPosition='center'
		>
			<div className={styles.screen}>
				<form className={styles.card}>
					<div className={styles.header}>
						<div className={styles.logo}>
							<img src='/images/logo.PNG' alt='workout' loading='lazy' />
						</div>
						<h1>Sign In</h1>
						<p>Best Workout App for YOu!</p>
					</div>

					<label className={styles.field}>
						<span>Email</span>
						<input type='email' placeholder='you@example.com' />
					</label>

					<label className={styles.field}>
						<span>Password</span>
						<div className={styles.passWrap}>
							<input
								type={showPass ? 'text' : 'password'}
								placeholder='password'
							/>

							<button
								type='button'
								className={styles.eye}
								onClick={togglePassword}
							>
								{showPass ? '🙈' : '👁️'}
							</button>
						</div>
					</label>

					<Button size='xl'>Sign In</Button>
				</form>
			</div>
		</Layout>
	)
}
export default Auth
