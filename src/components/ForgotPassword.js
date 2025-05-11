import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {


    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [NewPassword, setNewPassword] = useState("")
    let role = useRef();
    let navigate = useNavigate();
    const checkAll = (ev)=> {
        ev.preventDefault();

        if (Email.length === 0)
            alert('please enter email');
        else if (Password.length === 0)
            alert('please enter password')
        else if (NewPassword.length === 0)
            alert('please enter password')
        else if (NewPassword !== Password)
            alert('New password and Conform password not matching!!')

        else if (role.current.value === "farmer") {
            const url = "http://localhost:8085/farmer/forgot"
            const data = { "email": Email, "password": Password }
            axios.post(url, data).then((Response) => {
                const result = Response.data;

                if (!result) {
                    alert("No such user exists");

                }
                else {
                    alert("Your password has Changed successfully")
                    navigate("/FarmerLogin");
                }
            })
        }

        else if (role.current.value === "vendor") {
            const url = "http://localhost:8085/vendor/forgot"
            const data = { "email": Email, "password": Password }
            axios.post(url, data).then((Response) => {
                const result = Response.data;

                if (!result) {
                    alert("No such user exists");

                }
                else {
                    
                    alert("Your password has Changed successfully")
                    navigate("/VendorLogin");
                }
            })
        }
    }
    return (

        <div className="forg height">
            <div className='container'>
                <h1 className="head">Reset Password </h1>
                <div className="row">
                    <div className="column" >
                        <form  >

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><h6> Email Id</h6></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { setEmail(event.target.value) }} />

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><h6>New Password</h6></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => { setPassword(event.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><h6>Conform Password</h6></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => { setNewPassword(event.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label"><h6>Role</h6></label>
                                {/* <input type="text" class="form-control" ref={role} placeholder='role' /> */}
                                <select id="inputState" class="form-select" ref={role} required>
                                    <option ref={role} >farmer</option>
                                    <option ref={role} >vendor</option>
                                </select>
                            </div>

                            <div className="gap-2 d-md-flex"><button onClick={checkAll} className="loginbtn btn"
                                variant="outline-light" size="lg" type="submit" >
                                <b>Reset</b>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
