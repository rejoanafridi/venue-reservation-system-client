import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import useAuth from "../../Context/useAuth";

const Payment = () => {
	const { user } = useAuth();
	// const { productId } = useParams();

	// const [payorder, setpayOrder] = useState([]);
	// console.log(payorder);

	// useEffect(() => {
	// 	fetch(`http://localhost:5500/myorder/${productId}`)
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data))
	// 		.catch((err) => console.error(err));
	// }, []);

	// const payment = (e) => {
	// 	e.preventDefault();
	// 	const order = {
	// 		cus_name: user?.displayName,
	// 		cus_email: user?.email,
	// 		// product_id: productId,
	// 	};
	// 	// alert(order.product_ammount)
	// 	fetch(`http://localhost:5500/init`, {
	// 		method: "POST",
	// 		headers: {
	// 			"content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(order),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			window.location.replace(data);
	// 			// alert(data);
	// 		});
	// };
	return (
		<div>
			<h1>Your Order In processing please pay now.</h1>
			{/* <button className="btn btn-danger" onClick={payment}>
				Pay Now
			</button> */}
		</div>
	);
};

export default Payment;
