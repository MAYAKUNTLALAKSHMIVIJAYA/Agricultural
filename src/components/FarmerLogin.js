// import React, { useRef } from 'react'
import React, { useState } from "react";
//import {useHistory} from "react-router-dom"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import loginimg from "../images/farmerlogin.png";

export default function FarmerLogin() {

   
const[Email,setEmail]=useState("")
     const[Password,setPassword]=useState("")
     //const history=useHistory();
     let navigate = useNavigate();
     
  
            const dispatch = useDispatch()
        const SigninUser = (event) => {
            
            event.preventDefault(); 
          
          if (Email.length === 0) 
               alert('please enter email');
         else if (Password.length === 0) 
            alert('please enter password');
         else {
               const url="http://localhost:8085/farmer/login"
               const data={"email":Email,"password":Password}
                axios.post(url,data).then((Response)=>{
                const result=Response.data;
                console.log(result);
                if(!result){
                   alert("Invalid Password or Email");
                }
                else{

                      alert("you are logged in")
                     localStorage.setItem("farmer",JSON.stringify(result));
                    const dataToPerform = {
                        type: "ADD",
                        payload: {
                          obj:result
                  
                        }
                  
                      }
                      dispatch(dataToPerform);
                     navigate("/Profile");
                    
                    }
           })
         }
        }


        return (
            <div className="imgF height">
                <div className='container '>
                    <br/> <br/>
                <h1 className="head">Farmer Login </h1>
                    <div className="row ">
                    
                        <div className="column" >
                            <form onSubmit={SigninUser}  >
                                
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"><h6>Email Id</h6></label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(event)=>{setEmail(event.target.value)}} />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><h6>Password</h6></label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event)=>{setPassword(event.target.value)}} />
                                </div>
                              
                                
                                    <div className="gap-2 d-md-flex"><button className="loginbtn btn"
                                    variant="outline-light" size="lg" type="submit" >
                                    <b>SignIn</b>
                                    </button>
                                    <form action="/Registration" > <button className="loginbtn btn" ><b>SignUp</b></button></form></div>
                                
                                <br/>
                                <Link to="/ForgotPass">
                                   <h5 > <a variant="outline-light" size="lg">
                                        Forgot Password click Here
                                    </a></h5>
                                </Link>
                            </form>
                        </div>
                        <div className="col xl-9  farmerimg">
                        <img className="farmerimg img-fluid" style={{width:'400px'}} src={loginimg}></img>
                        </div>
                    </div>
                    
                </div>

            </div>)

    }
