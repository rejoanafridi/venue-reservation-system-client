import React from "react";

const About = () => {
	return (
		<section className=" my-3" id="aboutus">
			<h1 className="text-center fw-bold">About Us</h1>

			<div className="container text-center">
				<div className="container p-4">
					<div className="row gx-5">
						<div className="col-lg-6 p-3">
							<div className="videoWrapper">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/4voAuvAzB8Y"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						</div>
						<div className="col-lg-6 p-3"></div>

						<h1 className="fw-bold text-center text-dark bg-light rounded mt-5">
							Daffodil University
						</h1>
						<p className="fw-light text-dark text-center bg-light rounded">
							Being established in 2002, Daffodil International University has
							become a prominent private university in Bangladesh. Our 150 Acre
							campus is full of life and positive energy, fostering education
							and innovation for more than 20000 students. Here, students are
							encouraged to ask questions and think, debate and collaborate with
							professors to take ownership of their learning.
						</p>
						<a href="/emergency.html">
							<button type="button" className="btn btn-danger text-center">
								Emergency
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
