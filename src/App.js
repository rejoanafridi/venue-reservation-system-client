import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/pages/Shared/Nav/Nav";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Services/Services";
import About from "./Components/pages/About/About";
import Footer from "./Components/pages/Shared/Footer/Footer";
import Login from "./Components/pages/Auth/Logiin/Login";
import AuthProvider from "./Components/Context/AuthProvider";
import Booking from "./Components/pages/Booking/Booking";
import Payment from "./Components/pages/Payment/Payment";
import SuccessPayment from "./Components/pages/Payment/SuccessPayment";
import Dashboard from "./Components/pages/Dashboard/Dashboard";
import DashboardHome from "./Components/pages/Dashboard/DashboardHome";
import PrivateRouter from "./Components/Context/PrivateRouter/PrivateRouter";
import PageNotFound from "./Components/pages/pageNotFound/PageNotFound"
function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Nav></Nav>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/services">
							<Services></Services>
						</Route>
						<Route path="/about">
							<About></About>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/dashboard">
							<Dashboard></Dashboard>
						</Route>
						<PrivateRouter path="/success">
							<SuccessPayment></SuccessPayment>
						</PrivateRouter>
						<Route path="/payment">
							<Payment></Payment>
						</Route>
						<PrivateRouter path="/booking/:bookingId">
							<Booking></Booking>
						</PrivateRouter>
						<Route path="*">
							<PageNotFound></PageNotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
