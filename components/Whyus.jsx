import React from "react";
import { Container, Row, Col, Button, Tab, Tabs, Image } from "react-bootstrap";
import styles from "../styles/home.module.css";

const Whyus = () => {
	return (
		<section className={styles.whyUs}>
			<Container>
				<Row>
					<Col md={5} className={styles.benefitsCol}>
						<h2>Why Choose Us?</h2>
						<Tabs defaultActiveKey="innovation" id="fill-tab-example" fill>
							<Tab eventKey="innovation" title="Innovation">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum
							</Tab>
							<Tab eventKey="flexibility" title="Flexibility">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum
							</Tab>
							<Tab eventKey="speed-quality" title="Speed & Quality">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum
							</Tab>
							<Tab eventKey="support" title="Support">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum
							</Tab>
						</Tabs>
					</Col>
					<Col md={1}></Col>
					<Col md={6}>
						{/* <Image src="why-us.png" fluid /> */}
						<img
							src="why-us.png"
							alt="Why Choose Us"
							style={{ width: "auto", height: "100%", objectFit: "fill" }}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Whyus;
