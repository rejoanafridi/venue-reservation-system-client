import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/pages/Shared/Nav/Nav";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Services/Services";
import About from "./Components/pages/About/About";
import Footer from "./Components/pages/Shared/Footer/Footer";
function App() {
	return (
		<div className="App">
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
        <Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
