import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/logoSection.module.css";

const Partners = () => {
	return (
		<section className={styles.ourPartners}>
			<Container>
				<h2>Our Partners --</h2>
				{/* Add logos of client companies here */}
				<div className={styles.logoSection}>
					<img src="clientLogo.png" alt="Logo 1" />
					<img src="clientLogo.png" alt="Logo 2" />
					<img src="clientLogo.png" alt="Logo 3" />
					<img src="clientLogo.png" alt="Logo 4" />
					<img src="clientLogo.png" alt="Logo 5" />
					<img src="clientLogo.png" alt="Logo 6" />
				</div>
			</Container>
		</section>
	);
};

export default Partners;
