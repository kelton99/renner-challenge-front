import { FaShoppingCart } from "react-icons/fa";

export default function Cards({ products }) {
	
	const baseURL = "http://localhost:5000/products";

	return (
		<>
				{products.map((product) => (
					<div className="col-lg-3 col-sm-6 col-12" key={product._id}>
						<div className="card card-product-grid">
							<a href={ "/products/" + product._id } className="img-wrap">
								<img
									src={baseURL + "/images/" + product.image}
									alt={product.image}
								/>
							</a>
							<div className="info-wrap border-top">
								<a href="/" className="float-end btn btn-primary btn-icon">
									<FaShoppingCart className="icon" />
								</a>
								<a href={ "/products/" + product._id } className="title text-truncate">
									{product.name}
								</a>
								<small className="text-muted">{product.description.length > 25 ? `${product.description.slice(0, 25)}...` : product.description}</small>
								<div className="price-wrap">
									<strong className="price">R$ {product.price}</strong>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
}