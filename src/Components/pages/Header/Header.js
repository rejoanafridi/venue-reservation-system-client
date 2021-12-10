import React from "react";

const Header = () => {
	return (
		<header className="container">
			<div className="">
				<div className="row g-2">
					<div className="col-lg-6">
						<div className="p-3">
							<h2 className="fw-bold text-center mt-3">WE ARE HERE FOR YOU</h2>
							<p className=" text-center fw-light"> we are 24/7 for you.</p>
							<button type="button" className="btn btn-danger text-center">
								Emergency
							</button>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="p-3">
							<img
								className="img-fluid rounded shadow"
								src="https://www.kindpng.com/picc/m/381-3817421_office-team-illustration-hd-png-download.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
