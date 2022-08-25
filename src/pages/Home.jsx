import CarouselComponent from "../components/CarouselComponent";
import Cards from "../components/Cards";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
	const baseURL = "http://localhost:5000/products";

	const [products, setProducts] = useState([]);
	const [cheapestProduct, setCheapestProduct] = useState({});

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setProducts(response.data);

			setCheapestProduct(
				response.data.filter((product) => product.quantity > 0).reduce((acc, loc) => (acc.price < loc.price ? acc : loc))
			);
		});
	});

	return (
		<>
			<Container>
				<Row>
					<div style={{position: "relative"}}>
					<img
						className="banner"
						style={{width: "100%"}}
						src={baseURL + "/images/" + cheapestProduct.image}
						alt={cheapestProduct.image}
					/>
					<div className="banner-caption">
						<h3 style={{color: "#aaaaaa"}}>
							{cheapestProduct.name}
						</h3>
					</div>
					</div>
				</Row>
				<br />
				<br />
				<Row>
					<CarouselComponent products={products} />
				</Row>
				<br />
				<br />

				<Row>
					<Cards products={products} />
				</Row>
			</Container>
		</>
	);
}
