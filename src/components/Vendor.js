import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function Vendor() {

  const[api,setApi] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:8085/vendor/getAllvendors")
      .then((res)=>{
          // console.log("response");
           console.log(res);
          console.log(res['data']);

          setApi(res['data'])
      })
  } , []);

   console.log("API DATA",api);
  return (
      <div className='container'>
          <h1>Showing Farmer Details</h1>
          <table className='table table-striped'>
              <thead><tr>
                  <th>Vid</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th>phoneno</th>
                  <th>DOb</th>
                  <th>account no</th></tr>
              </thead>
          {
              api && api.map( props=> 
                  <tr>
                      <td>{props.vendorID}</td>
                      <td>{props.email}</td>
                      <td>{props.firstname}</td>
                      <td>{props.lastname}</td>
                      <td>{props.mobileno}</td>
                      <td>{props.dob}</td>
                      <td>{props.accountnumber}</td>
                   </tr>   
              )
          } 
          </table>
      </div>
  )
  
}
