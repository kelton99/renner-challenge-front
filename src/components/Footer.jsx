import React from "react";

export default function Footer() {
	return (
		<footer className="section-footer bg-white shadow">
			<div className="container">
				<section className="footer-main py-5">
					<div className="row">
						<aside className="col-md-12 col-lg-3 col-xl-3">
							<article className="me-lg-4">
								<p className="mt-3">
									© 2017- 2022 Templatemount. <br /> All rights reserved.
								</p>
							</article>
						</aside>
						<aside className="col-6 col-md-3 col-lg-2 col-xl-2">
							<h6 className="title">Store</h6>
							<ul className="list-menu mb-3">
								<li>
									<a href="/">About us</a>
								</li>
								<li>
									<a href="/">Find store</a>
								</li>
								<li>
									<a href="/">Categories</a>
								</li>
								<li>
									<a href="/">Blogs</a>
								</li>
							</ul>
						</aside>
						<aside className="col-6 col-md-3 col-lg-2 col-xl-2">
							<h6 className="title">Information</h6>
							<ul className="list-menu mb-3">
								<li>
									<a href="/">Help center</a>
								</li>
								<li>
									<a href="/">Money refund</a>
								</li>
								<li>
									<a href="/">Shipping info</a>
								</li>
								<li>
									<a href="/">Refunds</a>
								</li>
							</ul>
						</aside>
						<aside className="col-6 col-md-3 col-lg-2 col-xl-2">
							<h6 className="title">Support</h6>
							<ul className="list-menu mb-3">
								<li>
									<a href="/"> Help center </a>
								</li>
								<li>
									<a href="/"> Documents </a>
								</li>
								<li>
									<a href="/"> Account restore </a>
								</li>
								<li>
									<a href="/"> My Orders </a>
								</li>
							</ul>
						</aside>
						<aside className="col-6 col-md-3 col-lg-3 col-xl-3">
							<h6 className="title">Call us</h6>
							<p className="h5 mb-0">(800) 060-0730</p>
							<small className="text-muted">(9-13 and 14-18 ; Mon-Fri)</small>
							<nav className="mt-3">
								<a
									className="btn btn-icon btn-light"
									title="Facebook"
									target="_blank"
									href="/"
								>
									<i className="fab fa-facebook-f"></i>
								</a>
								<a
									className="btn btn-icon btn-light"
									title="Instagram"
									target="_blank"
									href="/"
								>
									<i className="fab fa-instagram"></i>
								</a>
								<a
									className="btn btn-icon btn-light"
									title="Youtube"
									target="_blank"
									href="/"
								>
									<i className="fab fa-youtube"></i>
								</a>
								<a
									className="btn btn-icon btn-light"
									title="Twitter"
									target="_blank"
									href="/"
								>
									<i className="fab fa-twitter"></i>
								</a>
							</nav>
						</aside>
					</div>
				</section>
			</div>
		</footer>
	);
}
