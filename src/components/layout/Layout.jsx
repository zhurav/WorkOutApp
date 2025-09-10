import React from 'react'
import Header from './header/Header.jsx'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
