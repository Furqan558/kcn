import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FunFactCounter from "./Counter";

const Facts = () => {
	return (
		<section className="fun-facts">
			<Container>
				<Row>
					<Col md={4}>
						<FunFactCounter endNumber={348} />
						<p>Happy Clients</p>
					</Col>
					<Col md={4}>
						<FunFactCounter endNumber={198} />
						<p>Projects Completed</p>
					</Col>
					<Col md={4}>
						<FunFactCounter endNumber={25} />
						<p>Team Members</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Facts;
