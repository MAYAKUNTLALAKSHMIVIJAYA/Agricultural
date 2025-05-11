import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import vloginimg from "../images/venimg.jpg";

export default function VendorLogin() {


    const[Email,setEmail]=useState("")
     const[Password,setPassword]=useState("")
     //const history=useHistory();
     let navigate = useNavigate();
     const dispatch = useDispatch()
      
     
        const signinUser = (event) => {
          event.preventDefault(); 
          if (Email.length === 0) 
               alert('please enter email');
         else if (Password.length === 0) 
            alert('please enter password');
         else {
               const url="http://localhost:8085/vendor/login"
               const data={"email":Email,"password":Password}
                axios.post(url,data).then((Response)=>{
                const result=Response.data;
                console.log(result);
                if(!result){
                   alert("Invalid Password or Email");

                }
                else{

                      alert("you are logged in")
                
                    localStorage.setItem("vendor",JSON.stringify(result));
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
    <div className="imgV height">
  
  
  <div className='container'>
  <br/> <br/>
                <h1 className="head">Vendor Login</h1>
                <div className="row">
                <div className="column">
                  <form onSubmit={signinUser}>
                 {/* <h2 classNameName='text-center'>Farmer_login</h2> */}
                  <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label"><h6>Email Id</h6></label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setEmail(event.target.value)}}/>
                    
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label"><h6>Password</h6></label>
                      <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=>{setPassword(event.target.value)}} />
                  </div>
                
                  <div className="gap-2 d-md-flex"><button className="loginbtn btn "
                                    variant="outline-light" size="lg" type="submit">
                                   <b> SignIn</b>
                                    </button>
                                    <form action="/Registration" > <button className="loginbtn btn" ><b>SignUp</b></button></form></div>
                  <br/><br/>
                  <Link to="/ForgotPass">
                <h5 style={{color:"black"}}>  <a variant="outline-light" size="lg">
                  Forgot Password click Here
                  </a></h5>
                  </Link>
                  </form>
                 </div>
                 <div className="col xl-9  farmerimg">
                        <img className="farmerimg img-fluid" style={{width:'400px'}} src={vloginimg}></img>
                        </div>
             </div>
        </div>
    </div>) 
  }