import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/website_assets/nombolo_logo.svg';
import { IconContext } from 'react-icons/lib';
import {
	Nav,
	NavbarContainer,
	Image,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './Navbar.elements';

const link = {
	fontFamily: 'Nunito',
	color: '#5ca9ab',
	fontWeight: 'bold',
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'inherit',
	padding: '0.5rem 1rem',
	zIndex: '999',
};

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClicker = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLinks to="/">
						<Image src={logo} onClick={closeMobileMenu} click={click} />
					</NavLinks>
					<MobileIcon onClick={handleClicker}>
						{click ? <FaTimes color="#f47646" /> : <FaBars color="#f47646" />}
					</MobileIcon>
					<NavMenu onClick={handleClicker} click={click}>
						<a style={link} href="https://testflight.apple.com/join/O39OOHmD">
							Download iOS
						</a>
						<a
							style={link}
							href="https://play.google.com/apps/testing/com.nombolo.nombolo"
						>
							Download Android
						</a>
						<NavLinks to="/FAQ">FAQ</NavLinks>
						<a style={link} href="https://forms.gle/Uah8J9dQs9xNYipf9">
							Ambassador Program
						</a>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
