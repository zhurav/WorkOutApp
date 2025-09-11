import { useRef, useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import { useOnEscape } from '../../../hooks/useOnEscape'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

function Hamburger() {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef(null)

	useOnClickOutside(ref, () => setIsShow(false), isShow) // const close = useCallback(() => setIsShow(false), [])
	useOnEscape(() => setIsShow(false), isShow) // useOnClickOutside(ref, close)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(s => !s)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
export default Hamburger
