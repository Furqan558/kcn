import React from "react";
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import styles from "../styles/home.module.css";

const Portfolio = ({ images }) => {
	return (
		<section className={styles.ourPortfolio}>
			<Container>
				<h2>Our Portfolio --</h2>
				<Slider />
			</Container>
		</section>
	);
};

export default Portfolio;
