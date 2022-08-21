import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'
export default function Cards() {
	const baseURL = "http://localhost:5000/products";

	const [products, SetProducts] = useState([]);

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			SetProducts(response.data);
		});
	}, []);

	return (
		<>
			<div className="row">
				{products.map((product) => (
					<div className="col-lg-3 col-sm-6 col-12">
						<div className="card card-product-grid">
							<a href="/" className="img-wrap">
								<img src={baseURL + "/images/" + product.image} alt={product.image} />
							</a>
							<div className="info-wrap border-top">
								<a href="/" className="float-end btn btn-primary btn-icon">
									<FaShoppingCart className="icon"/>
									
								</a>
								<a href="/" className="title text-truncate">
								{ product.name }
								</a>
								<small className="text-muted">{ product.description }</small>
								<div className="price-wrap">
									<strong className="price">R$ { product.price }</strong>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
