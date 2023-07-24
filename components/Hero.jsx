import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
const Hero = ({ heading, message }) => {
	return (
		<section className={styles.hero}>
			<Container>
				<Row>
					<Col className={styles.leftColumn} md={8}>
						<h1>Welcome to our Website</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
						<input type="text" placeholder="Search" />
					</Col>
					<Col className={styles.rightColumn} md={4}>
						<Row>
							<Col md={6} className={styles.subColumn}>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-8-q9j5sg7wmhqmfpokv0uxq7zn9h8rx70ymkp182oli6.png"
									alt="Image 1"
									width={260}
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-10-q9j5sj1f6zuhejkhek2tfpa11muvkac5mynhnwkezi.png"
									alt="Image 2"
									width={260}
									height={150}
								/>
							</Col>
							<Col md={6} className={styles.subColumn}>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-7-q9j5skx3knx21rhr3kw2kosy8ellzojmb7ygmghmn2.png"
									alt="Image 3"
									width={260}
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-9-q9j5smsrybzmozf0slpbpobvf6ccf2r2zh9fl0euam.png"
									alt="Image 4"
									width={260}
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-11-q9j5soogc027c7cahmikunusly32ugyjnqkejkc1y6.png"
									alt="Image 5"
									width={260}
									height={150}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
