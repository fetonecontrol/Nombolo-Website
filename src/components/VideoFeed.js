import React, { useEffect, useState, useMemo, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { API, graphqlOperation } from 'aws-amplify';
import { listPostsByActive } from '../graphql/custom/queries';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import useApiCall from '../custom-hooks/useApiCall';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useGetMissions from '../custom-hooks/useGetMissions';
// import Maps from './Maps';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const reactPlayer = {
	overflow: 'hidden',
	display: 'flex',
};

const reactPlayerContainer = {};

const playerWrapper = {};

const swiperPlayerStyle = {
	height: 'auto',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '18.75rem',
	borderRadius: '.93rem',
};
const swiperSlideStyle = {
	padding: '0',
	margin: '0',
};

export default function VideoFeed(props) {
	const filteredPosts = useApiCall(props);

	console.log(filteredPosts);
	const filteredMissions = useGetMissions();
	// console.log(filteredMissions[6]);
	const [metaData, setMetaData] = useState('');

	const dataToRender = filteredPosts.map((post) =>
		filteredMissions.filter((mission) => mission.experienceId === post.id)
	);

	console.log(dataToRender[5]);

	console.log(metaData);
	const [swiper, setSwiper] = useState();
	const swiperRef = useRef();

	//update swiper when props changes
	useEffect(() => {
		swiper && swiper.update();
		console.log(swiperRef);
	}, [filteredPosts]);

	// console.log(useGetMissions());

	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							overflow: 'hidden',
							height: '100vh',
						}}
					>
						<div className="swiper-container">
							<div className="swiper-wrapper">
								{/* begin code for video carousel */}
								<Swiper
									ref={swiperRef}
									style={swiperPlayerStyle}
									slidesPerView={1}
									navigation={{
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev',
									}}
									autoplay={{
										disableOnInteraction: false,
									}}
									pagination={{ clickable: false }}
									direction={'horizontal'}
									onSlideChange={() => console.log('slide change')}
									onSwiper={setSwiper}
								>
									{filteredPosts.slice(0, 25).map((post, index) => (
										<SwiperSlide style={swiperSlideStyle} key={post.id}>
											{({ isActive }) => (
												<div style={playerWrapper}>
													<ReactPlayer
														style={reactPlayer}
														playing={isActive}
														className="react-player"
														width="100%"
														height="120%"
														volume={1}
														muted={true}
														url={post.sdUri}
													/>
												</div>
											)}
										</SwiperSlide>
									))}
									<div
										className="swiper-button-next"
										style={{
											color: '#f47646',
										}}
									></div>
									<div
										className="swiper-button-prev"
										style={{
											color: '#f47646',
										}}
									></div>
								</Swiper>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}
