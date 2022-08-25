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
									© 2022 Kelton.
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
					</div>
				</section>
			</div>
		</footer>
	);
}
