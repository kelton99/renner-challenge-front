import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
	/*name,
		description,
		price,
		quantity,
		image: req.file.filename,*/

	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0.0);
	const [quantity, setQuantity] = useState(0);
	const [image, setImage] = useState();

	const addProduct = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		formData.append('description', description);
		formData.append('price', price);
		formData.append('quantity', quantity);
		formData.append('image', image);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		axios.post("http://localhost:5000/products", formData, config)
		.then((response) => {
			console.log(response.data);
			navigate(`/products/${response.data._id}`)
		}).catch()
	};

	return (
		<section className="padding-y bg-white shadow-sm">
			<div className="container">
				<form onSubmit={addProduct}>
					<div className="row">
						<div className="col">
							<label for="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="col">
							<label for="price" className="form-label">
								Price
							</label>
							<input
								type="number"
								className="form-control"
								id="price"
								name="price"
								required
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<div className="col">
							<label for="quantity" className="form-label">
								Quantity
							</label>
							<input
								type="number"
								className="form-control"
								id="quantity"
								name="quantity"
								required
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<label for="description" className="form-label">
							Description
						</label>
						<input
							type="text"
							className="form-control"
							id="description"
							name="description"
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div class="mb-3">
						<label for="image" class="form-label">
							Image
						</label>
						<input
							class="form-control"
							type="file"
							id="image"
							name="image"
							required
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Add
					</button>
				</form>
			</div>
		</section>
	);
}
