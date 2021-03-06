import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Context/useAuth";

import SingleOrder from "../SingleOrder/SingleOrder";

const MyOrders = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useAuth();
	const [myOrders, setMyOrders] = useState([]);
	console.log(myOrders);
	const email = user.email;
	console.log(email);
	const url = `http://localhost:5500/myorder/${email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setMyOrders(data);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);
	const deleteOrder = (id) => {
		const confirmation = window.confirm("are you sure want to delete?");
		if (confirmation) {
			const url = `http://localhost:5500/myOrders/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("Order Canceled");
						const remainingOrder = myOrders.filter((orde) => orde._id !== id);
						setMyOrders(remainingOrder);
					}
				});
		} else {
			return;
		}
	};
	//   console.log(myOrders);
	// const orders = myOrders.map((pkg) => {
	// 	const order = {
	// 		orderProduct: pkg.pack,
	// 		orderId: pkg._id,
	// 		isPending: pkg.isPending,
	// 	};
	// 	return order;
	// });

	return (
		<div className="text-center my-5">
			{isLoading ? (
				<div className="text-center my-5">
					<Spinner animation="border" variant="dark" />
				</div>
			) : (
				<Container id="packages" className="mt-4">
					<h2 className="text-center text-warning bg-dark rounded-3 border-bottom pb-3 my-5 border-warning p-1 border-5 my-5">
						Orders
					</h2>

					<Row className="g-4 mb-5">
						{myOrders.map((order) => (
							<SingleOrder
								key={order.orderId}
								order={order}
								deleteOrder={deleteOrder}
							></SingleOrder>
						))}
					</Row>
				</Container>
			)}
		</div>
	);
};

export default MyOrders;
