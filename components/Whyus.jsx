import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Whyus = () => {
	return (
		<section className="why-choose-us">
			<Container>
				<Row>
					<Col md={6}>
						<h2>Why Choose Us</h2>
						<h4>Experienced Professionals</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							blandit massa enim.
						</p>
					</Col>
					<Col md={6}>
						<img src="/why-choose-us.jpg" alt="Why Choose Us" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Whyus;
