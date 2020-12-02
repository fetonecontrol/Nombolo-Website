import React from 'react';
import { useEffect } from 'react';
import postPin from '../assets/postPinLarge.png';
import styled from 'styled-components';
import Radium from 'radium';

const HoverText = styled.p`
	display: none;
	color: red;
	&:hover {
		display: block;
		color: blue;
		cursor: pointer;
	}
`;

function MetaData(props) {
	console.log(props.post);
	return (
		<React.Fragment>
			<HoverText>
				{/* {console.log(props.post.description)} */}
				<p>{props.post.user.name}</p>
				<p>{props.post.createdAt}</p>
				<p>{props.post.description}</p>
				<img style={{ maxWidth: '1.5rem' }} src={postPin} />
			</HoverText>
		</React.Fragment>
	);
}

export default MetaData;
