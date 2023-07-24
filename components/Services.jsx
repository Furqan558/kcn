import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/home.module.css";
const Services = () => {
	return (
		<section className={styles.services}>
			<Container>
				<h2>Hire Us For --</h2>
				<Row>
					{/* Stylish Card for Service 1 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					{/* Stylish Card for Service 2 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					{/* Stylish Card for Service 3 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					{/* Stylish Card for Service 4 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					{/* Stylish Card for Service 5 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					{/* Stylish Card for Service 6 */}
					<Col md={4}>
						<Card
							style={{
								width: "315px",
								marginBottom: "50px",
								alignItems: "center",
								border: "none",
							}}
						>
							<Card.Img
								variant="top"
								src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
								style={{ width: "350px", height: "190px" }}
							/>
							<Card.Body>
								<div className={styles.cardTilt}></div>
								<Card.Title
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Card Title
								</Card.Title>
								<Card.Text
									style={{ paddingLeft: "20px", paddingRight: "20px" }}
								>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md={4}></Col>
					<Col style={{ textAlign: "center" }} md={4}>
						<button>View More</button>
					</Col>
					<Col md={4}></Col>
				</Row>
			</Container>
		</section>
	);
};

export default Services;
