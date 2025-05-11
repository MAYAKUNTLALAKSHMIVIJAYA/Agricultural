import React from 'react';
import { Link } from 'react-router-dom';


//import Button from "react-bootstrap/Button";

export default function Login() {
  return (
 


<div className='container login' style={{height:'600px'}} >
        <h1 className='text-center ' style={{textShadow:"orange 2px 2px"}}><b>Login Page</b></h1>
            <div class="row center1" style={{textShadow:"Green 2px 2px"}} >
                <div class="column Ovel textalign">
                    <Link to="/FarmerLogin">
                <a variant="outline-light" size="lg">
                   
                    <button className='fbtn'><b>Farmer Login</b></button>
            
                </a>
                </Link>
                </div>
                <div class="column Ovel textalign">
                <Link to="/VendorLogin">
                <a variant="outline-light" size="lg">
               
                <button className='vbtn '><b>VendorLogin</b></button>
                 
                </a>
                </Link>
                </div>
                <div class="column Ovel textalign">
                <Link to="/Logistics">
                <a variant="outline-light" size="lg">
               
                <button className='tbtn'><b>Transport</b></button>
                 
                </a>
                </Link>
                </div>
            </div>
</div>
)
 }


