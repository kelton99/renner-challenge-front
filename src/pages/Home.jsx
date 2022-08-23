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
			setCheapestProduct(response.data[0]);
		});
	}, []);

	return (
		<>
			<Container>
				<Row>
					<img
						className="banner"
						src={baseURL + "/images/" + cheapestProduct.image}
						alt={cheapestProduct.image}
					/>
				</Row>
				<br />
				<br />
				<Row>
					<CarouselComponent products={products.slice(0, 3)} />
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
