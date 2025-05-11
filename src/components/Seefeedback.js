import React, { useState, useEffect } from 'react'
import axios from 'axios';



export default function Seefeedback() {


    const [api, setvApi] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8085/farmer/getfeedback")
          .then((res) => {
    
            setvApi(res['data'])
         
          
          })
      }, []);


  return (
    <div className="container " style={{height:"700px"}}> <table className='table table-bordered '>
    <thead><tr>
        <th>Email</th>
        <th>Location</th>
        <th>feedback from users</th>
      </tr>
 
{
    api && api.map( props=> 
        <tr>
            <td>{props.email}</td>
            <td>{props.location}</td>
            <td>{props.massage}</td>
            
         </tr>   
    )
}    </thead>
</table></div>
  )}
