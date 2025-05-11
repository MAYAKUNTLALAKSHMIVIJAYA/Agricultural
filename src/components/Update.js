import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function Update() {
    
    let productData = useSelector(state => state);
    let object = productData[0].obj;
    
    
    let firstname = useRef();
    let lastname = useRef();
    let email = useRef();
    let gender = useRef();
    let dob = useRef();
    let aadharno = useRef();
    let mobileno = useRef();
    let licencenumber = useRef();
    let apmc = useRef();
    let bankname = useRef();
    let branchname = useRef();
    let accounttype = useRef();
    let accountnumber = useRef();
    let role = object.role;
    let password=object.password;
    let state=useRef();
    let address=useRef();
    let id=object.farmerID;
    let id1=object.vendorID;

    let navigate = useNavigate();

    const myfunc = (ev) => {
        ev.preventDefault();

        var obj = {
            farmerID:id,
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: password,
            gender: gender.current.value,
            dob: dob.current.value,
            aadharno: aadharno.current.value,
            mobileno: mobileno.current.value,
            licencenumber: licencenumber.current.value,
            apmc: apmc.current.value,
            bankname: bankname.current.value,
            branchname: branchname.current.value,
            accounttype: accounttype.current.value,
            accountnumber: accountnumber.current.value,
            state:state.current.value,
            address:address.current.value,
            role: role
        }
        console.log(obj);
        var obj1 = {
          vendorID:id1,
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          email: email.current.value,
          password: password,
          gender: gender.current.value,
          dob: dob.current.value,
          aadharno: aadharno.current.value,
          mobileno: mobileno.current.value,
          licencenumber: licencenumber.current.value,
          apmc: apmc.current.value,
          bankname: bankname.current.value,
          branchname: branchname.current.value,
          accounttype: accounttype.current.value,
          accountnumber: accountnumber.current.value,
          state:state.current.value,
            address:address.current.value,
          role: role
      }
      

        // axios.delete("http://localhost:4000/api/users/"+userid)
        if(role === "Farmer")
           {
            
          axios.put("http://localhost:8085/farmer/updatefarmer", obj)
            .then((res) => {
               alert("Update Successfully")
                navigate("/FarmerLogin");
            })}
        if(role === "Vendor")
        {
         
        axios.put("http://localhost:8085/vendor/updatevendor", obj1)
            .then((res) => {
                alert("Update Successfully")
                navigate("/VendorLogin");
            })
          }
        
    }





  return (
<div className='RegForm' style={{height:"700px"}}>
        <h1 style={{textAlign:'center',textShadow:"green 2px 2px"}}>Update Info</h1>
      <b>  <form class="row g-3 container-fluid" onSubmit={myfunc}>
    <div class="col-md-4">
      <label for="inputPassword4" class="form-label" >First Name</label>
      <input type="text" class="form-control" ref={firstname} defaultValue={object.firstname} required/>
    </div>

    <div class="col-md-4">
      <label for="inputPassword4" class="form-label">Last Name</label>
      <input type="text" class="form-control" ref={lastname} defaultValue={object.lastname} required/>
    </div>

    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">EmailID</label>
      <input type="email" class="form-control" ref={email} defaultValue={object.email} required/>
    </div>

    <div class="col-3">
      <label for="inputAddress" class="form-label">Gender</label>
      <select id="inputState" class="form-select" defaultValue={object.gender}  ref={gender} required>
      <option ref={gender} >Male</option>
      <option  ref={gender} >Female</option>
      <option  ref={gender} >Other</option>
    </select>
    </div>

    <div class="col-4">
      <label for="inputAddress" class="form-label">AadharNo</label>
      <input type="number" class="form-control"ref={aadharno} defaultValue={object.aadharno} required/>
    </div>
    

    <div class="col-2">
      <label for="inputAddress" class="form-label">Date Of Birth</label>
      <input type="date" class="form-control" ref={dob} defaultValue={object.dob} required />
    </div>

    <div class="col-4">
      <label for="inputAddress2" class="form-label">MobileNo</label>
      <input type="number" class="form-control" ref={mobileno} defaultValue={object.mobileno}  required/>
    </div>
    <div class="col-md-4">
      <label for="inputCity" class="form-label">LicenceNumber</label>
      <input type="text" class="form-control" ref={licencenumber} defaultValue={object.licencenumber}  required/>
    </div>
    
    <div class="col-md-4">
      <label for="inputZip" class="form-label">APMC Name</label>
      <input type="text" class="form-control" ref={apmc} defaultValue={object.apmc} required/>
    </div>

    <div class="col-md-4">
      <label for="inputZip" class="form-label">BankName</label>
      <input type="text" class="form-control" ref={bankname} defaultValue={object.bankname} required/>
    </div>
   
    <div class="col-md-3">
      <label for="inputZip" class="form-label">BranchName</label>
      <input type="text" class="form-control"ref={branchname} defaultValue={object.branchname} required/>
    </div>
     <div class="col-md-3">
      <label for="inputZip" class="form-label">AccountNumber</label>
      <input type="number" class="form-control"ref={accountnumber} defaultValue={object.accountnumber} required/>
    </div>
     <div class="col-md-3">
      <label for="inputZip" class="form-label">AccountType</label>
      <select id="inputState" class="form-select" defaultValue={object.accounttype} ref={accounttype} required>
      <option ref={accounttype} >Saving</option>
      <option  ref={accounttype} >Current</option>
    </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">State</label>
     
      <select id="inputState" class="form-select" ref={state} required>
      <option>Select</option>
              <option ref={state} >AndamanAndNicobar</option>
              <option ref={state} >Andhra Pradesh</option>
              <option ref={state} >Arunachal Pradesh</option>
              <option ref={state} >Assam</option>
              <option ref={state} >Bihar</option>
              <option ref={state} >Chandigarh</option>
              <option ref={state} >Chhattisgarh</option>
              <option ref={state} >Dadra and Nagar Haveli</option>
              <option ref={state} >Daman and Diu</option>
              <option ref={state} >Delhi</option>
              <option ref={state} >Goa</option>
              <option ref={state} >Gujarat</option>
              <option ref={state} >Haryana</option>
              <option ref={state} >Himachal Pradesh</option>
              <option ref={state} >Jammu and Kashmir</option>
              <option ref={state} >Jharkhand</option>
              <option ref={state} >Karnataka</option>
              <option ref={state} >Kerala</option>
              <option ref={state} >Ladakh</option>
              <option ref={state} >Lakshadweep</option>
              <option ref={state} >Madhya Pradesh</option>
              <option ref={state} >Maharashtra</option>
              <option ref={state} >Manipur</option>
              <option ref={state} >Meghalaya</option>
              <option ref={state} >Mizoram</option>
              <option ref={state} >Nagaland</option>
              <option ref={state} >Odisha</option>
              <option ref={state} >Puducherry</option>
              <option ref={state} >Punjab</option>
              <option ref={state} >Rajasthan</option>
              <option ref={state} >Sikkim</option>
              <option ref={state} >Tamil Nadu</option>
              <option ref={state} >Telangana</option>
              <option ref={state} >Tripura</option>
              <option ref={state} >Uttar Pradesh</option>
              <option ref={state} >Uttarakhand</option>
              <option ref={state} >West Bengal</option>
    </select>
    </div>
    <div class="col-md-4">
    <p >Address</p>
      <textarea class="form-control" ref={address} defaultValue={object.address}></textarea>
    </div>

    <div class="col-md-9">
     <button type="submit" class="btn btn-primary">Update</button>
    </div>

     
  </form></b>
  </div>
  )
}