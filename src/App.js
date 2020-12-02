import './App.css';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import GlobalStyle from './components/globalStyles';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ask from './components/Ask';
import VideoFeed from './components/VideoFeed';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FAQ from './components/FAQ';

Amplify.configure(awsmobile);
Auth.signIn('e.samuels-ellingson@nombolo.com', 'password').catch((e) =>
	console.log('sign in error', e)
);

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/faq">
					<GlobalStyle />
					<Navbar />
					<Col>
						<FAQ />
					</Col>
					<Footer />
				</Route>
				<Route path="/">
					<GlobalStyle />
					<Navbar />
					<Container>
						<Ask />
					</Container>
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
