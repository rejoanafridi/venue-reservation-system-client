import { Card, Col, Button } from "react-bootstrap";


const SingleOrder = (props) => {
	const { _id, name, description, image, cost } = props.order.single;
	console.log(props.order.isPending);
	const { isPending } = props.order;
	const { orderId } = props.order;
	const { deleteOrder } = props;

	return (
		<Col sm={12} md={12} lg={6}>
			<Card>
				<Card.Img variant="top" className=" w-100 h-50" src={image} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<p>Cost: {cost} Taka</p>
					<p>Product Id: {_id}</p>
				</Card.Body>
				<Card.Footer>
					{/* <Button
						onClick={() => deleteOrder(orderId)}
						variant="dark"
						className="mx-4"
					>
						<i className="fas fa-trash"></i> Cancel Now
					</Button> */}

					{isPending ? (
						<Button variant="danger">
							<i className="fas fa-paperclip"></i> Pending.
						</Button>
					) : (
						<Button className="mx-4" disabled variant="dark">
							<i className="fas fa-check"></i> Confirmed
						</Button>
					)}
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default SingleOrder;
