import React from "react";
import TestimonialSwitch from "./TestimonialSwitch";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/testimonial.module.css";

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<Container>
				<h2>Testimonials --</h2>
				<Row>
					<Col md={6}>
						<TestimonialSwitch />
						{/* <img src="/testimonial-image.jpg" alt="Testimonial" /> */}
					</Col>
					<Col md={6}></Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonials;
