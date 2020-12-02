import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import faq from './../assets/website_assets/ask-explore-bump.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const h1Style = {
	fontFamily: 'Zilla Slab',
	color: '#CAD071',
	textAlign: 'center',
};

const h4Style = {
	fontFamily: 'Nunito',
	fontWeight: 'bold',
	color: '#4a4a4a',
	border: 'none',
	background: 'none',
	fontWeight: '600',
};

const accordionStyle = {
	opacity: '.5',
	color: 'black',
	padding: '3.125rem',
	margin: '3.125rem',
	width: '100%',
	borderRadius: '.93rem',
};

const faqImage = {
	display: 'flex',
	margin: 'auto',
	paddingTop: '1.25rem',
	height: 'auto',
	width: '50rem',
	zIndex: '-1',
};

const cardStyle = {
	background: 'none',
	border: 'none',
};

const cardHeaderStyle = {
	background: 'rgba(0,0,0,0)',
	borderBottom: 'none',
	cursor: 'pointer',
};

function FAQ() {
	return (
		<React.Fragment>
			<h1 style={h1Style}>Frequently Asked Questions</h1>
			<Row>
				<Col xs="4">
					<Accordion style={accordionStyle} defaultActiveKey="0">
						<Card style={cardStyle}>
							<Accordion.Toggle
								style={cardHeaderStyle}
								as={Card.Header}
								eventKey="1"
							>
								<h4 style={h4Style}>Question here</h4>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>
									I'm baby put a bird on it yuccie craft beer twee try-hard lyft
									quinoa. Beard master cleanse vegan everyday carry raw denim.
									Raclette normcore stumptown farm-to-table vaporware. Salvia
									YOLO vaporware mlkshk humblebrag, franzen gluten-free prism
									four dollar toast copper mug meggings. Gochujang occupy
									bushwick humblebrag church-key scenester.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card style={cardStyle}>
							<Accordion.Toggle
								style={cardHeaderStyle}
								as={Card.Header}
								eventKey="2"
							>
								<h4 style={h4Style}>Question here</h4>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="2">
								<Card.Body>
									Meditation authentic yuccie hammock hell of chillwave.
									Listicle ethical portland, mumblecore banjo disrupt kombucha
									jean shorts seitan snackwave jianbing locavore. Man braid
									freegan food truck scenester lo-fi neutra street art activated
									charcoal jianbing pork belly pabst. Seitan food truck
									single-origin coffee, kogi scenester gluten-free vinyl
									normcore forage marfa actually.{' '}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card style={cardStyle}>
							<Accordion.Toggle
								style={cardHeaderStyle}
								as={Card.Header}
								eventKey="3"
							>
								<h4 style={h4Style}>Question here</h4>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="3">
								<Card.Body>
									Readymade hella try-hard hot chicken craft beer before they
									sold out lumbersexual. Marfa taiyaki shaman, chambray
									sartorial gentrify la croix hammock coloring book food truck
									vaporware.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card style={cardStyle}>
							<Accordion.Toggle
								style={cardHeaderStyle}
								as={Card.Header}
								eventKey="4"
							>
								<h4 style={h4Style}>Question here</h4>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="4">
								<Card.Body>
									Franzen disrupt next level mumblecore, deep v +1 etsy hot
									chicken small batch enamel pin meh vexillologist migas la
									croix. Jean shorts man braid single-origin coffee, craft beer
									yuccie salvia wolf ramps tattooed seitan cray neutra normcore.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card style={cardStyle}>
							<Accordion.Toggle
								style={cardHeaderStyle}
								as={Card.Header}
								eventKey="5"
							>
								<h4 style={h4Style}>Question here</h4>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="5">
								<Card.Body>
									Before they sold out brunch waistcoat kogi 3 wolf moon
									drinking vinegar.{' '}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Col>
				<Col xs="6">
					<img style={faqImage} src={faq} />
				</Col>
			</Row>
		</React.Fragment>
	);
}
export default FAQ;
