import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	background-color: transparent;
	margin-top: 2rem;
	padding: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Footer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 2rem;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Terbuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
		'Lucida Sans', Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
	padding: 10px 20px;
	border-radius: 2px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;
	&::placeholder {
		color: #242424;
	}
	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;
export const FooterLinksWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;
export const FooterLinksItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 200px;
	box-sizing: border-box;
	color: #fff;
	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
	font-family: 'Nunito', sans-serif !important;
`;

export const FooterLink = styled(Link)`
	font-family: 'Nunito', sans-serif !important;
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;
