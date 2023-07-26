import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";

function solutions() {
	return (
		<div>
			<Head>
				<title>KCN WEBSITE</title>
				<meta name="description" content="KCN Telecommunications Group" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <main className={styles.main}> */}
			<main>
				{/* Section 1 */}
				<section className={styles.hero}>
					<Container>
						<Row>
							<Col className={styles.leftColumn} md={8}>
								<h1>Our Services</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</Col>
							<Col className={styles.rightColumn} md={4}></Col>
						</Row>
					</Container>
				</section>
				{/* Section 2 */}
				<section className={styles.services}>
					<Container>
						<h2>Lorem Ipsum --</h2>
						<Row>
							{/* Stylish Card for Service 1 */}
							<Col md={4}>
								<Card style={{ width: "18rem", marginBottom: "50px" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 2 */}
							<Col md={4}>
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 3 */}
							<Col md={4}>
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							{/* Stylish Card for Service 4 */}
							<Col md={4}>
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 5 */}
							<Col md={4}>
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 6 */}
							<Col md={4}>
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="why-us.png" />
									<Card.Body>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 3 */}
				<Whyus />
				{/* Section 5 */}
				<section className={styles.cta}>
					<Container
						className={styles.ctaContainer}
						style={{ borderLeft: "10px solid #21d0b3" }}
					>
						<Row>
							<Col>
								<h2>Ready to get started?</h2>
								<p
									style={{
										fontSize: "64px",
										color: "#21d0b3",
										fontWeight: "700",
									}}
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
			</main>
		</div>
	);
}

export default solutions;
