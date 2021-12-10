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
function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Nav></Nav>
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
					<Route path="/success">
						<Payment></Payment>
					</Route>
					<Route path="/booking/:bookingId">
						<Booking></Booking>
					</Route>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
