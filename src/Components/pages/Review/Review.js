import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../Context/useAuth";

const Review = () => {
	const { user } = useAuth();
	const [rating, setRating] = useState(5);
	const history = useHistory();
	const descriptionRef = useRef();
	const handelSubmit = (e) => {
		const review = {
			user: user.displayName,
			description: descriptionRef.current.value,
			rating,
		};
		fetch("http://localhost:5500/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		}).then(() => {
			history.push("/home");
		});
		e.preventDefault();
	};
	const ratings = (num) => {
		setRating(num);
	};
	return (
		<div>
			<h3 className="my-4 text-center  bg-white text-warning p-2 fw-bold">
				Submit Review Here{" "}
			</h3>
			<Form className="" onSubmit={handelSubmit} className="my-5">
				<Form.Group
					className="mb-3 w-100 text-warning bg-dark-light rounded p-1"
					controlId="exampleForm.ControlTextarea1"
				>
					<Form.Label>Description:</Form.Label>
					<Form.Control ref={descriptionRef} as="textarea" rows={3} />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Rating:</Form.Label>
					<br />
					<Form.Check
						className="text-danger"
						inline
						onChange={() => ratings(1)}
						label="1"
						name="group1"
						type="radio"
					/>
					<Form.Check
						inline
						label="2"
						onChange={() => ratings(2)}
						name="group1"
						type="radio"
					/>
					<Form.Check
						inline
						label="3"
						onChange={() => ratings(3)}
						name="group1"
						type="radio"
					/>
					<Form.Check
						inline
						label="4"
						onChange={() => ratings(4)}
						name="group1"
						type="radio"
					/>
					<Form.Check
						className=""
						inline
						label="5"
						onChange={() => ratings(5)}
						name="group1"
						type="radio"
					/>
				</Form.Group>
				<Button type="submit" className="btn btn-dark">
					Submit{" "}
				</Button>
			</Form>
		</div>
	);
};

export default Review;
