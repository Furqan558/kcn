import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
const Cta = () => {
	return (
		<section className={styles.cta}>
			<Container
				className={styles.ctaContainer}
				style={{ borderLeft: "10px solid #21d0b3" }}
			>
				<Row>
					<Col>
						<h2>Ready to get started?</h2>
						<p
							style={{ fontSize: "64px", color: "#21d0b3", fontWeight: "700" }}
						>
							We're Ready!
						</p>
					</Col>
					<Col style={{ textAlign: "center", alignSelf: "center" }}>
						<button className={styles.ctaButton}>Contact Us</button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Cta;
