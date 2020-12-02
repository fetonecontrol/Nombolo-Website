import React from 'react';
import { useEffect, useState } from 'react';
import postPin from '../assets/postPinLarge.png';
import styled from 'styled-components';
import avatar_default from './../assets/avatar_assets/avatar_04.png';
import ReactPlayer from 'react-player';

// import Radium from 'radium';

const HoverText = styled.div`
	display: none;
	background-color: rgba(255, 255, 255, 0.9);
	color: gray;
	border-radius: 0.5rem;
	font-family: 'Nunito', sans-serif !important;
	font-weight: bold;
	font-size: 0.8rem;
`;
const HoverImg = styled.div`
	position: relative;
`;

const Container = styled.div`
	&:hover {
		${HoverText} {
			display: block;
			z-index: 1;
			position: absolute;
			width: 13rem;
			height: auto;
			align: center;
			padding: 0.5rem;
		}
	}
`;

const reactPlayer = styled.div`
	border-radius: 0.5rem;
`;

function MetaData(props) {
	let today = new Date();

	return (
		<React.Fragment>
			<Container>
				<HoverText>
					<p style={{ color: '#5ba9ab' }}>@{props.post.user.name}</p>
					<ReactPlayer
						className="react-player"
						width="12rem"
						height="100%"
						autoPlay={true}
						// onEnded={() => {
						// 	// update which slide the swiper should show
						// 	console.log(swiper);
						// 	swiper.slideNext();
						// }}
						volume={1}
						muted={true}
						url={props.post.sdUri}
					/>
					{/* <div
						style={{
							paddingRight: '1rem',
							paddingLeft: '1rem',
							paddingTop: '1rem',
						}}
					> */}
					{/* <p>{props.post.createdAt}</p>
						<p>{props.post.description}</p> */}
					{/* <p>Location: {props.post.address}</p> */}
					{/* </div> */}
				</HoverText>
				<HoverImg>
					<img style={{ maxWidth: '1.5rem' }} src={postPin} />
				</HoverImg>
			</Container>
		</React.Fragment>
	);
}

export default MetaData;
