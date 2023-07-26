import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";

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
				<Services />
				{/* Section 4 */}
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

export default services;
