import cn from 'clsx'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../ui/button/Button.jsx'
import Field from '../../ui/field/Field.jsx'
import Loader from '../../ui/loader/Loader.jsx'

import Layout from '../../layout/Layout.jsx'

import styles from './Login.module.scss'

//const [error, setError] = useState('')

const isLoading = true
const isLoadingAuth = false
const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'noChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	const [entered, setEntered] = useState(false)
	useEffect(() => {
		setEntered(true)
	}, [])

	return (
		<Layout
			bgImage='/images/home-bg.jpg'
			overlay={0.45}
			bgSize='cover'
			bgPosition='center'
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn(styles.card, entered && styles.cardEnter)}
			>
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src='/images/logo.PNG' alt='workout' loading='lazy' />
					</div>
					<h1>Sign In</h1>
					<p>Best Workout App for YOu!</p>
				</div>

				<Field
					name='email'
					register={register}
					options={{
						required: 'Email обязателен',
						pattern: { value: /\S+@\S+\.\S+/, message: 'Wrong email' }
					}}
					label='Email'
					type='email'
					placeholder='you@example.com'
					autoComplete='email'
					error={errors.email?.message}
				/>

				<Field
					name='password'
					register={register}
					options={{
						required: '',
						minLength: { value: 6, message: 'Minimum 6 symbols' }
					}}
					type='password'
					label='Password'
					placeholder='*********'
					autoComplete='current-password'
					error={errors.password?.message}
				/>

				<Button size='xl'>Sign In</Button>
			</form>
		</Layout>
	)
}

export default Auth
