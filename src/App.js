import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";

function App() {
	return (
		<>
			<Router>
				<Header />
				<br />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/Addproduct" element={<AddProduct />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
