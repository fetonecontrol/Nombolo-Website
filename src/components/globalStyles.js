import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 81.25rem;
	margin-right: auto;
	margin-left: auto;
	padding-right: 3.125rem;
	padding-left: 3.125rem;
	@media screen and (max-width: 991px) {
		padding-right: 3.125rem;
		padding-left: 3.125rem;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? '#7FD1AE' : '#7AB5C0')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? '12px 64px' : '10px 20px')};
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${({ primary }) => (primary ? '#D2C8A4' : '#A8BCBF')};
	}
	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export default GlobalStyle;
