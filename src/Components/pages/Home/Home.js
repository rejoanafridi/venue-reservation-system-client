import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
	return (
		<div>
           
               <Header></Header>
               <Services></Services>
               <About></About>
               <Review></Review>
             
          </div>
	);
};

export default Home;
