import React, { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import singlePayment from "./singlePayment";


const Paymentsummary = () => {
	const { user } = useAuth();
	const email = user.email;
	const [payment, setPayment] = useState();
	useEffect(() => {
		fetch(`http://localhost:5500/payment${email}`)
			.then((response) => response.json())
			.then((data) => setPayment(data));
	}, []);
	return (
		<div>
			<h1>Payments Statement</h1>
			{payment.map((pay) => (
				<singlePayment key={pay._id} pay={pay}></singlePayment>
			))}
		</div>
	);
};

export default Paymentsummary;
