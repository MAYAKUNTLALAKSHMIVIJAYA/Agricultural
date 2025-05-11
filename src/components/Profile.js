import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Profile() {

    let fid = useRef();
    const dispatch = useDispatch()
    let navigate = useNavigate();

    let productData = useSelector(state => state);
    let object = productData[0].obj;

    
    let role1 = object.role;
    let vendorID = object.vendorID;
    let farmerID = object.farmerID;

    const deleteuser = () => {
        alert("are you sure")
        console.log(vendorID);
        console.log(role1);
        if (role1 === "Farmer") {
            axios.delete("http://localhost:8085/farmer/deletefarmer/" + farmerID)
                .then((Response) => {
                    const result = Response.data;

                    if (!result) {
                        alert("Opration Fails");

                    }
                    else {
                        alert("Your account deleted successfully")
                        navigate("/");
                    }
                })
        }

        else if (role1 === "Vendor") {
            axios.delete("http://localhost:8085/vendor/deletevendor/" + vendorID)
                .then((Response) => {
                    const result = Response.data;

                    if (!result) {
                        alert("Opration Fails");

                    }
                    else {
                        alert("Your account deleted successfully")
                        navigate("/");
                    }
                })
        }

    }
    const redirect = (ev) => {
        navigate("/Update")
    }

    const logout = (ev) => {

        ev.preventDefault();
        const logoutaction = {
            type: "ADD",
            payload: {
                obj: ""

            }
        }
        dispatch(logoutaction);
        alert("LogOut Successfull")
        navigate("/")
    }
    const goToDashboard = (ev) => {
        if (role1 === "Farmer") {
            navigate("/Farmerdashboard")
        }
        else if (role1 === "Vendor") {
            navigate("/Vendordashboard")
        }
    }
    const GoToseeforders=(ev)=>{
        if (role1 === "Farmer") {
         navigate("/SeefOrders")
        }
        else if (role1 === "Vendor") {
            navigate("/Seevorders")
        }
     }
    return (
        <div className='container prof'>
            {/* <h1 className='display-1'>404 page not found</h1> */}
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link" >Profile</button>
                    <button onClick={goToDashboard} class="nav-link">Dashboard</button>
                    <button 
                   onClick={GoToseeforders} class="nav-link">My Orders</button>
                </div>
            </nav>

            {/* https://www.graphicsprings.com/filestorage/stencils/dddc910484f67107ddca5490f5884574.png?width=500&height=500 */}
            <div class="row gutters-sm" >
                <div class="col-md-4 mb-3" style={{ float: "left" }}>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://hotemoji.com/images/dl/m/2-man-farmer-emoji-by-google.png " alt="Admin" class="rounded-circle" width="150" />
                                <div class="mt-3 ">
                                    <h4> {object.firstname} {object.lastname}</h4>
                                    <p class="text-secondary mb-1"><b>{object.role}</b></p>
                                    <p class="text-muted font-size-sm"> {object.apmc}  APMC</p>

                                    <button class=" btn btn-success" onClick={redirect}>Update Info</button>
                                    <button class="btn btn-success" onClick={deleteuser}>Delete Account</button>
                                </div>
                                <div><button onClick={logout} className="btn btn-success">
                                    LogOut
                                </button> </div>

                            </div>
                        </div>
                    </div>
                </div>


                <form >
                    <div class="col-md-8" style={{ float: "right", marginTop: "-480px" }} >
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> ID</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.farmerID}   {object.vendorID}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.firstname} {object.lastname}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.email}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.mobileno}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Date of Birth</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.dob}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">APMC Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.apmc}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Licence Number</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.licencenumber}
                                    </div>
                                </div>
                                <hr />

                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Account Number</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.accountnumber}
                                    </div>
                                </div><hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Account Type</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.accounttype}
                                    </div>
                                </div>
                                <hr />

                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Aadhar No</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {object.aadharno}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
