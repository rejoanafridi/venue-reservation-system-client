import React, { useEffect, useState } from "react";

import Service from "../Services/Service";

const Services = () => {
	const [service, setService] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5500/services")
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	return (
		<section className="container" id="service">
			<h1 className="fw-bold text-center bg-secondary rounded text-white p-1">
				Services
			</h1>

			<div className="row row-cols-1 row-cols-md-3 g-4 bg-light rounded my-1 ">
				{service.map((service) => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
		</section>
	);
};

export default Services;
