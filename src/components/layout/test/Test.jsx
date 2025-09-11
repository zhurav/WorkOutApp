import { useCallback, useEffect, useState } from 'react'

export default function TestNoCallback() {
	const [count, setCount] = useState(0)

	// Одна стабильная функция на всё время жизни компонента
	const handler = useCallback(() => console.log('Handler вызван'), [])

	//Каждый рендер → новая функция
	// const handler = () => console.log("Handler вызван");

	useEffect(() => {
		console.log('Эффект сработал')
	}, [handler])

	return (
		<div>
			<p>Счётчик: {count}</p>
			<button onClick={() => setCount(c => c + 1)} color='white'>
				+1
			</button>
		</div>
	)
}
