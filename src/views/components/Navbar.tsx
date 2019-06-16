import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<ul className="right hide-on-med-and-down">
					<li>
						<NavLink to="/">Form Generator</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
