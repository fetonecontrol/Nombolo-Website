import React from 'react';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Maps from './Maps';
import VideoFeed from './VideoFeed';
import android from './../assets/website_assets/btn_beta_android.png';
import apple from './../assets/website_assets/btn_beta_apple.png';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const splashText = {
	fontFamily: 'Nunito  sansSerif',
	fontWeight: '500',
	size: '2.8rem',
	color: 'white',
	paddingTop: '8rem',
};

const h1Style = {
	fontFamily: 'Zilla Slab',
	color: '#CAD071',
	textAlign: 'center',
};

const h4Style = {
	color: 'darkgrey',
	fontFamily: 'Sourcesanspro',
	align: 'left',
	textAlign: 'center',
};

const appButton = {
	paddingTop: '1rem',
	textAlign: 'center',
};

const formStyle = {
	paddingTop: '1.875rem',
	paddingBottom: '.625rem',
	paddingRight: '3rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '1.2rem',
	position: 'relative',
	padding: '.625rem',
	margin: '.94rem',
};

const hashtagStyle = {
	fontWeight: '700',
	letterSpacing: '.8rem',
	color: '#1f0253',
	fontFamily: 'Nunito',
	paddingBottom: '6rem',
};

function Ask(props) {
	const [textInputValue, setTextInputValue] = useState('');
	const [query, setQuery] = useState('');

	const delayedQuery = useCallback(
		debounce((filteredQuery) => {
			setQuery(filteredQuery);
		}, 300),
		[]
	);

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Form inline style={formStyle}>
						<div style={splashText}>
							<h1 style={h1Style}>Videos That Matter to You </h1>{' '}
							<h4 style={h4Style}>
								We are an experiential-based sharing application that helps
								people discover and engage with the world around them through
								geo-positioned video and requests.
							</h4>
						</div>
						<Form.Control
							style={{
								background: '#F7F7F7',
								opacity: '70%',
								margin: '.93rem',
								borderRadius: '.93rem',
								height: '100%',
								width: '100%',
								marginTop: '1.5rem',
								justifyContent: 'center',
								size: '1.25rem',
							}}
							type="text"
							name="ask"
							size="lg"
							value={textInputValue}
							placeholder="What would you like to see?"
							onChange={(e) => {
								delayedQuery(e.nativeEvent.target.value);
								setTextInputValue(e.nativeEvent.target.value);
							}}
						/>
					</Form>
					<div style={appButton}>
						<a href="https://testflight.apple.com/join/O39OOHmD">
							<img src={apple} height="auto" width="200px" />
						</a>
						<a href="https://play.google.com/apps/testing/com.nombolo.nombolo">
							<img src={android} height="auto" width="200px" />
						</a>
					</div>
				</Col>
				<div style={{ borderRadius: '.94rem' }}>
					<VideoFeed style={{ borderRadius: '.94rem' }} query={query} />
				</div>
			</Row>
			<Row>
				<h5 style={hashtagStyle}>
					#BLACKLIVESMATTER #INTHISTOGETHER #BLACKTECH
				</h5>
			</Row>

			<Maps query={query} />
		</React.Fragment>
	);
}

export default Ask;
