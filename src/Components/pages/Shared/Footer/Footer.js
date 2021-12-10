import React from "react";

const Footer = () => {
	return (
		// style="background-color: #e3f2fd; 
			    <footer>
        <div className="container text-center mt-1 rounded">
            <div className="row g-2">
              <div className="col-lg-4">
                <div className="p-3 "><img className="img-fluid rounded" src='https://st2.depositphotos.com/3474805/6223/v/600/depositphotos_62239579-stock-illustration-creative-office-work-desk.jpg' alt=''/></div>
              </div>
              <div className="col-lg-4">
                <div className="p-3 ">
                    <h1>Opening Hour</h1>
                    <hr />
                    <p className="fw-bold">10am-7pm <span className="text-danger"> Friday to Saturday</span></p>
                    <hr />
                    
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-3 ">
                    <h1>Our Office</h1>
                    <p className="fw-light">
                        <h4>Daffodil International University </h4>
                                Daffodil Smart City,Ashulia, Dhaka 
                                Tel: 48111639, 48117115, 09617901212

                            E-mail: admission@daffodilvarsity.edu.bd 
                    Facebook: https://www.facebook.com/daffodilvarsity.edu.bd 
                                    www.daffodil.university 
                    </p>
                </div>
              </div>
              <p className="text-muted fw-light">Developed ©2021 Or-Cracked. All Rights Reserved.</p>
            </div>
           
          </div>
          

		</footer>
	);
};

export default Footer;
