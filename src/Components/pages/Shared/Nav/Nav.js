import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Context/useAuth";
import logo from "../../../images/diu logo.png";
const Nav = () => {
	const { user, logOut } = useAuth();
	const handleLogout = () => {
		logOut();
	};
	
	return (
		<nav class="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor: "#e3f2fd"}} >
			<div className="container">
				<Link
					to="/"
					className="navbar-brand fw-bold rounded text-secondary p-1"
					href="#"
				>
					<img src={logo} alt="" width="100" height="70" />
					Venue
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav  me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/home"
								className="nav-link active btn btn-warning fw-bold mx-1 "
								aria-current="page"
								href="#"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-link btn-small active btn btn-dark text-white fw-bold mx-1 "
								aria-current="page"
								href="#"
							>
								Service
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about"
								className="nav-link active btn btn-success text-white fw-bold mx-1 "
								aria-current="page"
								href="#"
							>
								About Us
							</Link>
						</li>
					</ul>
					{user?.email ? (
						<>
						
								<Link
									to="/dashboard"
									className="nav-link active btn btn-success text-white fw-bold mx-1 "
									aria-current="page"
									
								>
									Dashboard
								</Link>
						
							
								<a type="button" onClick={handleLogout} className="btn btn-danger text-white">
									LogOut
								</a>

                                        <a type="text" className="text-success fw-bold mx-1 text-decoration-none">{user?.email} </a>
								<img src={user.photoURL} height="50px" width="50px"alt="" />
						</>
					) : (
						<Link
							to="/login"
							className="nav-link btn btn-primary text-white mx-1"
							href="#"
						>
							Login
						</Link>
					)}
                         
                    
				</div>
			</div>
		</nav>
	);
};

export default Nav;
