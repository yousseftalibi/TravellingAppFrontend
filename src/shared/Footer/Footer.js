import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from  '../logo.png';
/*
    Logo generated using Bing chat image creator
*/
const Footer = () => {

    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="pt-1">
                    <div className="container text-center text-md-start mt-3">
                        <div className="row mt-1">
                            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                           
                                <p>
                                <img className="img-fluid" src={logo} alt="Travelers logo" style={{ width: "50%" }}></img>
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Sponsored by
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Hotels.com</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Booking.com</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Airbnb.com</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Amazon.com</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">FAQ</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Legal</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Site Map</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 ">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>10 Rue de Vanves, 92130 Issy-les-Moulineaux <br />

                                    Travelers@outlook.com</p>
                                <a href="#!" className="text-reset" >Travelers.com</a>
                                <br /> <br />

                                <p>All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );

}
export default Footer;