import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from "./logo.png";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<img src={logo} alt={logo} class="logo" />
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/media" activeStyle>
			Media
		</NavLink>
		<NavLink to="http://www.linkedin.com/" activeStyle>
			LinkedIn
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
