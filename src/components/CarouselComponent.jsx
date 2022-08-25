import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent({ products }) {
	const baseURL = "http://localhost:5000/products";

	return (
		<>
			<Carousel fade variant="dark">
				{products.map((product) => (
					<Carousel.Item key={product._id}>
						<a href={`/products/${product._id}`}>
							<img
								className="d-block w-100"
								src={baseURL + "/images/" + product.image}
								alt={product.name}
								height={400}
							/>
						</a>

						<Carousel.Caption>
							<h3>{product.name}</h3>
							{product.quantity > 0 && (
								<Button variant="light">Adicionar ao Carrinho</Button>
							)}
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}
