import React, { useEffect, useState, useRef } from "react";
import { Button, Card, CardGroup, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";
// import useAuth from "../../Context/useAuth";
const Booking = () => {
	const [single, setSingle] = useState({});
	const { bookingId } = useParams();
	const [disable, setDisable] = React.useState(false);
	// const { user } = useAuth();
	const { user } = useAuth();
	const history = useHistory();
	const userRef = useRef();
	const emailRef = useRef();
	const addressRef = useRef();
	const idRef = useRef();
	const phoneRef = useRef();
	const cardRef = useRef();

	const { name, image, status, description, cost } = single;

	useEffect(() => {
		const url = `http://localhost:5500/booking/${bookingId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setSingle(data));
	}, []);
	const payment = (e) => {
		e.preventDefault();
		const order = {
			cus_name: user?.displayName,
			cus_email: user?.email,
			product_name: name,
			product_profile: description,
			product_image: image,
			product_amount: cost,
		};
		// alert(order.product_ammount)
		fetch(`http://localhost:5500/init`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				window.location.replace(data);
			});
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		const userMail = emailRef.current.value;
		const userName = userRef.current.value;
		const userAddress = addressRef.current.value;
		const productId = idRef.current.value;
		const userPhone = phoneRef.current.value;
		const isPending = true;
		const order = {
			userMail,
			userName,
			userAddress,
			productId,
			userPhone,
			single,
			isPending,
		};
		fetch("http://localhost:5500/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		}).then(() => {
			alert("Booking was successfully added please payment now");
			

			// history.push("/");
		});
	};
	return (
		<div className="text-center">
			<Container className="form text-start border-4 rounded-3 p-5 my-4 border-light border">
				<h3 className="text-warning text-center pb-4 mb-lg-4  rounded bg-dark rounded ">
					Confirm Booking.
				</h3>
				<div className="d-lg-flex">
					<div className="w-100">
						<CardGroup className="">
							<Card>
								<Card.Img variant="top" className="w-100 h-50" src={image} />
								<Card.Body>
									<Card.Title>{name}</Card.Title>
									<Card.Text>{description}</Card.Text>
									<p>Cost: {cost}</p>
								</Card.Body>

								<Link
									to="/home"
									className="align-
								center"
								>
									<Button className="btn-primary text-white text-center ">Back</Button>
								</Link>
							</Card>
						</CardGroup>
					</div>
					<div className="w-100 ms-lg-5  rounded ">
						<Form className="ms-lg-4" onSubmit={handelSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									ref={userRef}
									defaultValue={user.displayName}
								/>

								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									required
									defaultValue={user.email}
									ref={emailRef}
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control
									ref={addressRef}
									type="text"
									required
									placeholder="Address"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicID">
								<Form.Label>Product ID</Form.Label>
								<Form.Control
									type="text"
									required
									ref={idRef}
									defaultValue={bookingId}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicphone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="text"
									ref={phoneRef}
									required
									placeholder="Phone"
								/>
							</Form.Group>

							<Button variant="warning text-center align-center fw-bold  m-1" type="submit">
								Confirm Book
							</Button>
							<Button
								onClick={payment}
								variant="success text-center align-center m-1 fw-bold text-white"
								type="submit"
							>
								Payment
							</Button>
						</Form>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Booking;
