import React from 'react';
import {
	FooterContainer,
	Footer,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItems,
	FooterLinkTitle,
	FooterLink,
} from './Footer.elements';
import { Button } from '../globalStyles';

const footer = () => {
	return (
		<FooterContainer>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle> About Us </FooterLinkTitle>
						<FooterLink to="/"> How it Works</FooterLink>
						<FooterLink to="/"> Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle> Contact Us </FooterLinkTitle>
						<FooterLink to="/"> Email</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle> Social Media </FooterLinkTitle>
						<FooterLink to="/"> Instagram </FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
		</FooterContainer>
	);
};

export default footer;
