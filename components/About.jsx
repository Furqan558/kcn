import React from "react";
import styles from "../styles/home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const About = () => {
	return (
		<section className={styles.who}>
			<Container>
				<Row>
					<Col md={5}>
						<h2>Who We Are</h2>
						<Button variant="primary">Learn More</Button>
					</Col>
					<Col md={7}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
