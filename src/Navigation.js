import React from 'react'

const Navigation = (props) => {
	const menu = props.user.hasOwnProperty('id') ? {mr: ['Home', 'About'], ml: ['Posts', 'Logout']} : {mr: ['Home', 'About'], ml: ['Register', 'Login']};
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark  mb-3">
			<div className="container">
				<span className="navbar-brand">SharePosts</span>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					{Object.keys(menu).map((key, keyIndex) =>
					<ul key={keyIndex} className={`navbar-nav ${key}-auto`}>
						{menu[key].map((item, itemIndex) =>
						<li key={itemIndex} className="nav-item">
							<a className="nav-link" href="/" onClick={(e) => props.click(item.toLowerCase(), e)}>{item === 'Logout' ? `${item}, ${props.user.name}` : item}</a>
						</li>
						)}
						</ul>
						)}
				</div>
			</div>
		</nav>
	)
}

export default Navigation;
