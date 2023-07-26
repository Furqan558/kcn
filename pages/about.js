import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import Map from "@/components/Map";

function services() {
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
				<section className={styles.who}>
					<Container>
						<Row>
							<Col md={3} style={{ paddingTop: "50px" }}>
								<div style={styles.whoLeft}>
									<h2>Lorem Ipsum</h2>
								</div>
							</Col>
							<Col md={9}>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Similique cumque tempora rerum eius quos illo maiores, unde
									laudantium optio vitae animi, voluptatem, ratione officiis
									fugit dicta nulla cupiditate magni consequatur reiciendis!
									Aspernatur facere consequuntur voluptatum eaque odit corporis
									tenetur, libero aliquam fuga quod, magni quo eos quasi modi
									sequi, impedit recusandae neque.
								</p>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 3 */}
				<section className={styles.services}>
					<Container>
						<h2>Lorem Ipsum --</h2>
						<Row>
							{/* Stylish Card for Service 1 */}
							<Col md={3}>
								<Card
									style={{
										width: "18rem",
										borderWidth: "0px",
										marginBottom: "50px",
									}}
								>
									<Card.Img
										variant="top"
										src="idea.png"
										style={{ width: "100px", height: "auto" }}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={3}>
								<Card
									style={{
										width: "18rem",
										borderWidth: "0px",
										marginBottom: "50px",
									}}
								>
									<Card.Img
										variant="top"
										src="idea.png"
										style={{ width: "100px", height: "auto" }}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 2 */}
							<Col md={3}>
								<Card style={{ width: "18rem", borderWidth: "0px" }}>
									<Card.Img
										variant="top"
										src="idea.png"
										style={{ width: "100px", height: "auto" }}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							{/* Stylish Card for Service 3 */}
							<Col md={3}>
								<Card style={{ width: "18rem", borderWidth: "0px" }}>
									<Card.Img
										variant="top"
										src="idea.png"
										style={{ width: "100px", height: "auto" }}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Core Values Section  */}
				{/* Mission Vision Section  */}
				{/* Map Section  */}
				<Map />
			</main>
		</div>
	);
}

export default services;
