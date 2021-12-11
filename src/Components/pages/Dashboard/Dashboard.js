import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Switch, useRouteMatch } from "react-router";
import { HashLink } from "react-router-hash-link";

import ManageBooks from "../ManageBooks/ManageBooks";
import "./dash.css";

import AdminRoute from "../AdminRoute/AdminRoute";
import DashboardHome from "./DashboardHome";
import useAuth from "../../Context/useAuth";

import PrivateRouter from "../../Context/PrivateRouter/PrivateRouter";
import MyOrders from "../MyOrders/MyOrders";
import AddPackage from "./AddPackage/AddPackage";
import Paymentsummary from "../Payment/Paymentsummary";
const Dashboard = () => {
	let { path, url } = useRouteMatch();
	const { admin } = useAuth();

	return (
		<div className=" width mt-5 pt-5 mb-5">
			<Row>
				<Col
					className="border-4 border-end bg-dark p-2 rounded border-warning ps-lg-4 pt-lg-3 pb-lg-5"
					xs={4}
					md={2}
				>
					{admin ? (
						<div>
							<Nav.Link
								to={`${url}/addProduct`}
								as={HashLink}
								className="w-75 text-white fw-bold btn btn-warning m-1 "
							>
								Add Product
							</Nav.Link>

							<Nav.Link
								to={`${url}/management`}
								as={HashLink}
								className="w-75 text-white fw-bold btn btn-warning m-1 "
							>
								Manage Product
							</Nav.Link>
						</div>
					) : (
						<div>
							{" "}
							<Nav.Link
								to={`${url}/myOrders`}
								as={HashLink}
								className="w-75 text-white fw-bold btn btn-warning m-1 "
							>
								My Orders
							</Nav.Link>
							<Nav.Link
								to={`${url}/reviews`}
								as={HashLink}
								className="w-75 text-white fw-bold btn btn-warning m-1"
							>
								Review
							</Nav.Link>
							<Nav.Link
								to={`${url}/payLink`}
								as={HashLink}
								className="w-75 text-white fw-bold btn btn-warning m-1"
							>
								Payment
							</Nav.Link>
						</div>
					)}
				</Col>
				<Col className="" xs={8} md={10}>
					<Switch>
						<PrivateRouter exact path={`${path}`}>
							<DashboardHome></DashboardHome>
						</PrivateRouter>
						<PrivateRouter path={`${path}/myOrders`}>
							<MyOrders></MyOrders>
						</PrivateRouter>
						<PrivateRouter path={`${path}/payments`}>
              <Paymentsummary></Paymentsummary>
            </PrivateRouter>
						<AdminRoute path={`${path}/addProduct`}>
							<AddPackage></AddPackage>
						</AdminRoute>

						<AdminRoute path={`${path}/management`}>
							<ManageBooks></ManageBooks>
						</AdminRoute>
					</Switch>
				</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
