import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent() {
	const baseURL = "http://localhost:5000/products";

	const [products, SetProducts] = useState([]);

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			SetProducts(response.data);
		});
	}, []);

	return (
		<>
			<Carousel fade variant="dark">
				{ products.map((product) => (
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={ baseURL + "/images/" + product.image }
							alt={ product.name }
							height={350}
						/>
						<Carousel.Caption>
							<h3>{ product.name }</h3>
							<p>{ product.description }</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}
