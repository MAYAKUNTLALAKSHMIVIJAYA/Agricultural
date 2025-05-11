import React from 'react'
import { useNavigate } from 'react-router'
//import { useHistory } from 'react-router-dom'
export default function Logout() {
    //const history = useHistory()
    let navigate=useNavigate();
    const signout = () => {
        localStorage.clear()
        alert('LogOut Successful')
      }
      const cancle = () => {
        if(!localStorage.getItem("farmer")){
       navigate("/Vendordashboard")
        }
        else{
          navigate("/Vendordashboard")
        }
      }
  return (
        <div className="card-logout">
          <br></br><br></br>
          <div className="mb-3">
            <div className="cardlogout-image"></div>
            <br></br><br></br>
            <label className="input-label"><b>Are you sure you want to logout?</b></label><br></br>
            <br></br><br></br>
            <a href="/"><button onClick={signout} className="btn btn-success">
              Log Out
            </button></a>
            &nbsp;&nbsp;&nbsp;
            <button onClick={cancle} className="btn btn-danger">
              Cancle
            </button><br></br>
          </div>
        </div>
      )
    }
