import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Product() {
	const baseURL = "http://localhost:5000/products";

	const { id } = useParams();

	const [product, SetProduct] = useState({});

	const haveStock = (stock) => stock > 0;

	useEffect(() => {
		axios
			.get(`${baseURL}/${id}`)
			.then((response) => {
				SetProduct(response.data);
				console.log(response.data);
			})
			.catch((error) => console.log(error));
	});

	return (
		<>
			<section className="padding-y bg-white shadow-sm">
				<div className="container">
					<div className="row">
						<aside className="col-lg-6">
							<article className="gallery-wrap">
								<div className="img-big-wrap img-thumbnail">
									<img
										src={baseURL + "/images/" + product.image}
										height="520"
										alt={product.image}
									/>
								</div>
							</article>
						</aside>
						<div className="col-lg-6">
							<article className="ps-lg-3">
								<h4 className="title text-dark">{product.name}</h4>
								<div className="rating-wrap my-3">
									<span className="label-rating text-muted">
										<i className="fa fa-shopping-basket"></i>
										{haveStock(product.quantity)
											? product.quantity + " in stock"
											: "Out of stock"}
									</span>
								</div>
								<div className="mb-3">
									<var className="price h5">R$ {product.price}</var>
								</div>
								<p>{product.description}</p>
								<hr />
								{haveStock(product.quantity) &&
									<a href="/" className="btn btn-primary">
										<FaPlus className="icon" />
										<FaShoppingCart className="icon" />
									</a>
								}
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
