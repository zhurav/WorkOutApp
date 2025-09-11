import { useEffect } from 'react'

export function useOnEscape(onEscape, enabled = true) {
	useEffect(() => {
		if (!enabled) return
		function handle(e) {
			if (e.key === 'Escape') {
				onEscape(e)
			}
		}

		document.addEventListener('keydown', handle)
		return () => removeEventListener('keydown', handle)
	}, [onEscape, enabled])
}
