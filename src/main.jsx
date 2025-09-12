import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './components/screens/home/Home.jsx'

import './assets/styles/index.scss'
import Router from './routes/Routes'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router />
	</StrictMode>
)
