import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function Contactus() {
  let email = useRef();
  let location = useRef();
  let massage = useRef();
  let navigate = useNavigate();


  const saveFeedback=(ev)=>{
    var obj = {
      email: email.current.value,         //by using useref store the currnt value
      location: location.current.value,
      massage: massage.current.value
    }

    axios.post("http://localhost:8085/farmer/savefeedback", obj)
    .then((res) => 
      alert("Your Feedback Added Successfully")
    )}
    const getFeedback=(ev)=>{
      navigate("/Seefeedback")
      }
  




  return (
    <div className='contactus' id='contactus'>
      <div class="container">
        <div class="row justify justify-content-left">
          <div class="col-11 col-md-8 col-lg-6 col-xl-5">

            <div class="row mt-0">
              <div class="col-md-12 ">
                <h3 class="TAG">Contact Us</h3>
                <p class="TAG">Use the form below to share your questions, ideas, comments and feedback</p>
              </div>
            </div>
            <div class="form-group row mb-3">
              <div class="col-md-12 mb-0">
                <p class="TAG">Email</p> <input ref={email} id="e-mail" type="text" placeholder="Enter your email" name="email" class="form-control " required/>
              </div>
            </div>
            <div class="form-group row mb-3">
              <div class="col-md-12 mb-0">
                <p class="TAG">Location</p> <input ref={location} id="Location" type="text" placeholder="Enter your Location" name="Location" class="form-control " required />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-12 mb-2">
                <p class="TAG">Message</p> <textarea ref={massage} id="message" type="text" placeholder="Enter your message" name="message" class="form-control" required></textarea>
              </div>
            </div>
            <div class="TAG">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                I am not Robot
              </label>
            </div>
         
            <button type="button" onClick={saveFeedback} class="btn ">Submit</button>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button type="button" onClick={getFeedback} class="btn ">See Feedbacks</button>
          </div>
          

        </div>

      </div>
    </div>



  )
}
