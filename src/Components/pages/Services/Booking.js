import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
	const id = useParams();
	// console.log(bookId);
	const [single, setSingle] = useState([]);
	console.log(single)
	useEffect(() => {
		fetch(`http://localhost:5500/booking/${id}`)
			.then((res) => res.json())
			.then((data) => setSingle(data));
	}, []);
	return (
		<div>
			<h2>Booking</h2>
		</div>
	);
};

export default Booking;
