import styled from 'styled-components';
import logo from '../../assets/website_assets/nombolo_logo.svg';
import { Link } from 'react-router-dom';
import { Container } from '../globalStyles';

export const Nav = styled.nav`
	background: transparent;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	width: 100%;
	position: 'fixed';
	top: 0;
	z-index: 999;
	text-decoration: none;
	padding-top: 1rem;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: 5rem;
	text-decoration: none;
	${Container}
`;

export const NavLogo = styled(Link)`
text-decoration: none;
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5em;
display: flex;
align-items: center;
&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
`;

export const Image = styled.img`
	margin-right: 0.5rem;
`;

export const NavLinks = styled(Link)`
	font-family: 'Nunito', sans-serif !important;
	color: #5ca9ab;
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	z-index: 999;
	// height: 100%;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	@media screen and (max-width: 960px) {
		font-family: 'Nunito sansSerif';
		text-align: center;
		padding: 1rem;
		color: #cad071;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: -1rem;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: 'black';
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	text-decoration: none;
	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 5rem;
		right: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		color: white !important;
		background: white;
		border-radius: 0.93rem;
		&:focus,
		&:hover,
		&:visited,
		&:link,
		&:active {
			text-decoration: none;
		}
	}
`;

/* export const NavItem = styled.li` */
// height: 80px;
// border-bottom: 2px solid transparent;
//   &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
// }
// @media screen and (max-width: 960px) {
//   width: 100%;
//   &:hover {
//     border: none;
//     text-decoration: none;
//   }
// };
// }
/* `; */
