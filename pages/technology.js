import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";

function technology() {
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
								<h1>Welcome to our Website</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum
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
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Similique cumque tempora rerum eius quos illo maiores, unde
								laudantium optio vitae animi, voluptatem, ratione officiis fugit
								dicta nulla cupiditate magni consequatur reiciendis! Aspernatur
								facere consequuntur voluptatum eaque odit corporis tenetur,
								libero aliquam fuga quod, magni quo eos quasi modi sequi,
								impedit recusandae neque. Magni ipsum tempora nam veniam. Sequi
								voluptatum natus deserunt facilis eligendi itaque non excepturi
								officiis veniam? Ullam saepe alias necessitatibus praesentium
								nulla quibusdam iusto quis numquam repudiandae qui, soluta
								quisquam facilis optio fuga vero in distinctio enim repellat?
								Quo dolores, quod aut sunt magnam similique repellendus sapiente
								ex.
							</p>
							<Col md={6} style={{ paddingTop: "50px" }}>
								<div style={styles.whoLeft}>
									<img src="info1.png" alt="Why Choose Us" />
								</div>
							</Col>
							<Col md={6}>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Similique cumque tempora rerum eius quos illo maiores, unde
									laudantium optio vitae animi, voluptatem, ratione officiis
									fugit dicta nulla cupiditate magni consequatur reiciendis!
									Aspernatur facere consequuntur voluptatum eaque odit corporis
									tenetur, libero aliquam fuga quod, magni quo eos quasi modi
									sequi, impedit recusandae neque. Magni ipsum tempora nam
									veniam. Sequi voluptatum natus deserunt facilis eligendi
									itaque non excepturi officiis veniam? Ullam saepe alias
									necessitatibus praesentium nulla quibusdam iusto quis numquam
									repudiandae qui, soluta quisquam facilis optio fuga vero in
									distinctio enim repellat? Quo dolores, quod aut sunt magnam
									similique repellendus sapiente ex.
								</p>
								<br />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Similique cumque tempora rerum eius quos illo maiores, unde
									laudantium optio vitae animi, voluptatem, ratione officiis
									fugit dicta nulla cupiditate magni consequatur reiciendis!
									Aspernatur facere consequuntur voluptatum eaque odit corporis
									tenetur, libero aliquam fuga quod, magni quo eos quasi modi
									sequi, impedit recusandae neque. Magni ipsum tempora nam
									veniam. Sequi voluptatum natus deserunt facilis eligendi
									itaque non excepturi officiis veniam? Ullam saepe alias
									necessitatibus praesentium nulla quibusdam iusto quis numquam
									repudiandae qui, soluta quisquam facilis optio fuga vero in
									distinctio enim repellat? Quo dolores, quod aut sunt magnam
									similique repellendus sapiente ex.
								</p>
								<Button>CONNECT WITH US</Button>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 3 */}

				{/* Section 4 */}
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

export default technology;
