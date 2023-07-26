import React from "react";
import styles from "../styles/home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const About = () => {
	return (
		<section className={styles.who}>
			<Container>
				<Row>
					<Col md={3} style={{ paddingTop: "50px" }}>
						<div style={styles.whoLeft}>
							<h2>Who We Are</h2>
							<Button variant="primary">Learn More</Button>
						</div>
					</Col>
					<Col md={9}>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Similique cumque tempora rerum eius quos illo maiores, unde
							laudantium optio vitae animi, voluptatem, ratione officiis fugit
							dicta nulla cupiditate magni consequatur reiciendis! Aspernatur
							facere consequuntur voluptatum eaque odit corporis tenetur, libero
							aliquam fuga quod, magni quo eos quasi modi sequi, impedit
							recusandae neque. Magni ipsum tempora nam veniam. Sequi voluptatum
							natus deserunt facilis eligendi itaque non excepturi officiis
							veniam? Ullam saepe alias necessitatibus praesentium nulla
							quibusdam iusto quis numquam repudiandae qui, soluta quisquam
							facilis optio fuga vero in distinctio enim repellat? Quo dolores,
							quod aut sunt magnam similique repellendus sapiente ex.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
