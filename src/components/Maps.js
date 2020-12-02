import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../aws-exports';
import useApiCall from '../custom-hooks/useApiCall';
import postPin from '../assets/postPinLarge.png';
import MetaData from './MetaData';

const pinStyles = {
	maxWidth: '1.5rem',
};

const mapWrapperStyles = {
	height: '100vh',
	width: '100%',
	overflow: 'hidden',
	borderRadius: '.91rem',
	marginBottom: '1rem',
};

function Maps(props) {
	const filteredPosts = useApiCall(props);

	return (
		<div style={mapWrapperStyles}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
				defaultCenter={{
					lat: 45.5,
					lng: -122.67,
				}}
				defaultZoom={12}
			>
				{filteredPosts.map((post) => (
					<MetaData post={post} lat={post.latitude} lng={post.longitude} />
				))}
			</GoogleMapReact>
		</div>
	);
}

export default Maps;
