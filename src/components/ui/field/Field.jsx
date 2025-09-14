import { useState } from 'react'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

import styles from './Field.module.scss'

const Field = ({ register, name, options, error, label, ...rest }) => {
	const { type } = rest

	const wantsEye = type === 'password'
	const wrapClass = wantsEye ? styles.passWrap : styles.inputWrap
	const [showPass, setShowPass] = useState(false)
	const togglePassword = () => {
		setShowPass(prev => !prev)
	}

	const effectiveType = wantsEye ? (showPass ? 'text' : 'password') : type

	return (
		<label className={styles.field}>
			{label != null &&
				(typeof label === 'string' ? (
					<span className={[styles.label].filter(Boolean).join(' ')}>
						{label}
					</span>
				) : (
					label
				))}

			<div className={wrapClass}>
				<input
					className={[styles.input].filter(Boolean).join(' ')}
					aria-invalid={!!error || undefined}
					{...rest}
					type={effectiveType}
					{...register(name, options)}
				/>

				{wantsEye && (
					<button
						type='button'
						className={styles.eye}
						onClick={togglePassword}
						aria-label={showPass ? 'Lurk password' : 'Show password'}
						aria-pressed={showPass}
						onMouseDown={e => e.preventDefault()}
					>
						{showPass ? (
							<IoIosEye className={styles.icon} />
						) : (
							<IoIosEyeOff className={styles.icon} />
						)}
					</button>
				)}
			</div>
			{error && (
				<div role='alert' className={styles.error}>
					{error}
				</div>
			)}
		</label>
	)
}
export default Field
