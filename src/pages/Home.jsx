import React from "react";

import CarouselComponent from "../components/CarouselComponent";
import { Container, Row } from "react-bootstrap";
import Cards from "../components/Cards";

export default function Home() {
	return (
		<>
			<Container>
				<CarouselComponent />
			</Container>
			<br />
			<br />
			<div className="container">

			<Cards />
			</div>
		</>
	);
}
