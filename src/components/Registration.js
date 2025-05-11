import React, { useRef,useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Registration1() {

  let navigate = useNavigate();

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [AadharNo, setAadharno] = useState('')
  const [Mobileno, setMobileno] = useState('')
  const [AccountNumber, setAccountNumber] = useState('')   

    let firstname = useRef();
    let lastname = useRef();
    let email = useRef();
    let password = useRef();
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
    let state = useRef();
    let address=useRef();
    let role = useRef();

    const re1 = /^[A-Za-z\s]+$/;
    let res1=re1.test(FirstName);

    const re2 = /^[A-Za-z\s]+$/;
    let res2=re2.test(LastName);
  
    const re3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let res3=re3.test(Email);

    
    const re4 = /^(\d{12}|\d{16})$/;
    let res4=re4.test(AadharNo);

    const re5 = /^[1-9][0-9]{9}$/;
    let res5=re5.test(Mobileno);

    const re6 = /^\d{9,18}$/;
    let res6=re6.test(AccountNumber);

   

    const myfunc = (ev) => {
        ev.preventDefault();

        if (!res1) {
          alert('Invalid First Name')
        } else if (!re2) {
          alert('Invalid Last Name')
        } else if (!res3) {
          alert('Invalid Email')
        }
        else if (!res4) {
          alert('Invalid AadharNo')
        }
        else if (!res5) {
          alert('Invalid Mobileno')
        } else if (!res6) {
          alert('Invalid AccountNumber')
        }

        var obj = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: password.current.value,
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
            role: role.current.value
        }
        console.log(obj);

      

        if(res1 && res2 && res3 && res4 && res5  && res6){
          if(role.current.value === "Farmer")
          {
            alert("farmer")
         axios.post("http://localhost:8085/farmer/signup", obj)
           .then((res) => {
             alert("Your account created Successfully")
               navigate("/FarmerLogin");
           })}
       if(role.current.value === "Vendor")
       {
         alert("vendor")
       axios.post("http://localhost:8085/vendor/signup", obj)
           .then((res) => {
             alert("Your account created Successfully")
               navigate("/VendorLogin");
           })
         }
        }
        else{
          alert("Registration Fails ..Fill proper details")
        }
    }
     return (
      
    <div className='RegForm 'style={{height:"800px"}}>
        <h1 style={{textAlign:"center",textShadow:"green 2px 2px"}}>Registration Form</h1>
        <b><form class="row g-3 container-fluid" onSubmit={myfunc}>
  
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">First Name</label>
      <input type="text" class="form-control" ref={firstname}  onChange={(e) => {
                    setFirstName(e.target.value)
                  }} placeholder='firstname'required/>
    </div>

    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Last Name</label>
      <input type="text" class="form-control" ref={lastname} onChange={(e) => {
                    setLastName(e.target.value)
                  }} placeholder='lastname'required/>
    </div>

    <div class="col-md-4">
      <label for="inputPassword4" class="form-label">EmailID</label>
      <input type="email" class="form-control" ref={email} onChange={(e) => {
                    setEmail(e.target.value)
                  }} placeholder='email'required/>
    </div>

    <div class="col-4">
      <label for="inputAddress" class="form-label">Password</label>
      <input type="Password" class="form-control" ref={password} 
                    placeholder='password'required/>
    </div>

    <div class="col-3">
      <label for="inputAddress" class="form-label">Gender</label>
      <select id="inputState" class="form-select" ref={gender} required>
      <option ref={gender} >Male</option>
      <option  ref={gender} >Female</option>
      <option  ref={gender} >Other</option>
    </select>
    </div>

    <div class="col-4">
      <label for="inputAddress" class="form-label">AadharNo</label>
      <input type="number" class="form-control"ref={aadharno} onChange={(e) => {
                    setAadharno(e.target.value)
                  }} placeholder='aadharno'required/>
    </div>
    

    <div class="col-2">
      <label for="inputAddress" class="form-label">Date Of Birth</label>
      <input type="date" class="form-control" ref={dob} placeholder='dob'required />
    </div>

    <div class="col-4">
      <label for="inputAddress2" class="form-label">MobileNo</label>
      <input type="number" class="form-control" ref={mobileno} onChange={(e) => {
                    setMobileno(e.target.value)
                  }} placeholder='mobileno' required/>
    </div>
    <div class="col-md-4">
      <label for="inputCity" class="form-label">LicenceNumber</label>
      <input type="text" class="form-control" ref={licencenumber} placeholder='licencenumber'required/>
    </div>
    
    <div class="col-md-4">
      <label for="inputZip" class="form-label">APMC Name</label>
      <input type="text" class="form-control" ref={apmc} placeholder='apmc'required/>
    </div>

    <div class="col-md-4">
      <label for="inputZip" class="form-label">BankName</label>
      <input type="text" class="form-control" ref={bankname} placeholder='bankname'required/>
    </div>
   
    <div class="col-md-4">
      <label for="inputZip" class="form-label">BranchName</label>
      <input type="text" class="form-control"ref={branchname} placeholder='branchname'required/>
    </div>
     <div class="col-md-4">
      <label for="inputZip" class="form-label">AccountNumber</label>
      <input type="number" class="form-control"ref={accountnumber} onChange={(e) => {
                    setAccountNumber(e.target.value)
                  }} placeholder='accountnumber'required/>
    </div>
     <div class="col-md-2">
      <label for="inputZip" class="form-label">AccountType</label>
      <select id="inputState" class="form-select" ref={accounttype} required>
      <option ref={accounttype} >Saving</option>
      <option  ref={accounttype} >Current</option>
    </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">State</label>
     
      <select id="inputState" class="form-select" ref={state} required>
      <option>Select</option>
              <option ref={state} value="AN">Andaman and Nicobar Islands</option>
              <option ref={state} value="AP">Andhra Pradesh</option>
              <option ref={state} value="AR">Arunachal Pradesh</option>
              <option ref={state} value="AS">Assam</option>
              <option ref={state} value="BR">Bihar</option>
              <option ref={state} value="CH">Chandigarh</option>
              <option ref={state} value="CT">Chhattisgarh</option>
              <option ref={state} value="DN">Dadra and Nagar Haveli</option>
              <option ref={state} value="DD">Daman and Diu</option>
              <option ref={state} value="DL">Delhi</option>
              <option ref={state} value="GA">Goa</option>
              <option ref={state} value="GJ">Gujarat</option>
              <option ref={state} value="HR">Haryana</option>
              <option ref={state} value="HP">Himachal Pradesh</option>
              <option ref={state} value="JK">Jammu and Kashmir</option>
              <option ref={state} value="JH">Jharkhand</option>
              <option ref={state} value="KA">Karnataka</option>
              <option ref={state} value="KL">Kerala</option>
              <option ref={state} value="LA">Ladakh</option>
              <option ref={state} value="LD">Lakshadweep</option>
              <option ref={state} value="MP">Madhya Pradesh</option>
              <option ref={state} value="MH">Maharashtra</option>
              <option ref={state} value="MN">Manipur</option>
              <option ref={state} value="ML">Meghalaya</option>
              <option ref={state} value="MZ">Mizoram</option>
              <option ref={state} value="NL">Nagaland</option>
              <option ref={state} value="OR">Odisha</option>
              <option ref={state} value="PY">Puducherry</option>
              <option ref={state} value="PB">Punjab</option>
              <option ref={state} value="RJ">Rajasthan</option>
              <option ref={state} value="SK">Sikkim</option>
              <option ref={state} value="TN">Tamil Nadu</option>
              <option ref={state} value="TG">Telangana</option>
              <option ref={state} value="TR">Tripura</option>
              <option ref={state} value="UP">Uttar Pradesh</option>
              <option ref={state} value="UT">Uttarakhand</option>
              <option ref={state} value="WB">West Bengal</option>
    </select>
    </div>
    <div class="col-md-4">
    <p >Address</p>
      <textarea class="form-control" ref={address} placeholder="Enter your Address"></textarea>
    </div>

    <div class="col-md-4">
      <label for="inputZip" class="form-label">Role</label>
      <select id="inputState" class="form-select" ref={role} required>
      <option ref={role} >Farmer</option>
      <option  ref={role} >Vendor</option>
    </select>
    </div>
    <div class="col-md-6"><button type="submit" class="btn btn-success btn-lg">Save</button>
</div>
     
  </form></b>
  </div>
  )
}