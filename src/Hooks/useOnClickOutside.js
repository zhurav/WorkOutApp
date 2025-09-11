import { useEffect } from 'react'

export function useOnClickOutside(ref, onOutside, enabled) {
	useEffect(() => {
		if (!enabled) return

		function handle(e) {
			if (ref.current && !ref.current.contains(e.target)) onOutside(e)
		}
		document.addEventListener('pointerdown', handle)
		return () => document.removeEventListener('pointerdown', handle)
	}, [ref, onOutside, enabled])
}

// export const useOnClickOutside = ( isInitialValue ) => {
//     const [isShow, setIsShow] = useState(isInitialValue)
//     const ref = useRef(null)

//     const handleClickOutside = event =>  {
//         if (ref.current && !ref.current.contains(event.target))
//         {
//             setIsShow(false)
//         }
//     }

//     useEffect(() => {
//         document.addEventListener('click' , handleClickOutside, true)
//         return ()=> {
//             document.removeEventListener('click', handleClickOutside, true)
//         }
//     })

//     return [isShow, ref, setIsShow]
// }
