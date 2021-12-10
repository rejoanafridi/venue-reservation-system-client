import React from "react";
import { Link } from "react-router-dom";

const service = (props) => {
	const { _id, image, name, status, description } = props.service;
	console.log(status);
	return (
		<div className="col">
			<div className="card h-100 shadow">
				<img
					className="img-fluid"
					src={image}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-center fw-bold bg-light rounded">
						{name}
					</h5>
					<p className="card-text fw-light bg-light rounded p-1">
						{description}
					</p>
				</div>
				<div className="card-footer text-center">
					{status === "available" ?  (
						<Link to={`/booking/${_id}`}>
							<button
								type="button"
								className="btn btn-warning fw-bold text-white mx-3"
							>
								Book Now
							</button>
                                   <button type="button" className="btn btn-info fw-bold mx-3">
							Status : {status}
						</button>
						</Link>
					) : (
						<button className="btn bg-danger text-white"> Not Available </button>
					)}
				</div>
			</div>
		</div>
	);
};

export default service;
