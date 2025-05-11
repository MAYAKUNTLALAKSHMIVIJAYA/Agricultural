import React from 'react';
import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux';

export default function Header() {

       
    return (
        
        <div className='container-fuild menu-section nav-bg-th'>
             <div className="headerup">
             <h1 style={{ color: "white", fontFamily: "sans-serif" }}><b>Welcome To Farmer Friendly Web App</b></h1>
                <h2 style={{ color: "white" }}>Build Farmer Build Nation</h2>
             </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <b> <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active  navbar" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar" to="/Login">Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar" to="/Registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar" to="/AboutUs">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar" to="/ContactUs">Contact us</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link navbar" to="/Gallery">Gallery</Link>
                            </li> 
                        
                            {/* {object?<li>{object.firstname}</li>:<li>""</li>} */}
                            
                        </ul></b>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}