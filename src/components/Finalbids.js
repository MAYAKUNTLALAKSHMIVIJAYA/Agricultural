import React from 'react'
import axios from 'axios';
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Finalbids() {
  let params = useParams();
  let vid = params.vendorid;
  console.log("farmer");
  console.log(vid);
  const  [finalvendor, setfinalvendor] = useState([]);
 // const [api, setApi] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8085/finalorder/getbyvendorid/" + vid)
      .then((res) => {
        
        console.log(res['data']);
     
        console.log(res);
        setfinalvendor(res['data']);
        console.log("state");
        console.log(finalvendor[0]);
      })
  }, []);

  const goback=(ev)=>{
    navigate("/Seevorders")
  }


  return (
    <div className="container height">
      <button className="btn" style={{float:"right"}} onClick={goback}>GoBack</button>
      <table className=' table table-bordered '>

      <thead>  <tr> 
          <th>PRODUCT NAME</th>
          <th>FARMER</th>
          <th>VENDOR</th>
           <th>PURCHASE QUANTITY</th>
          <th>Unit</th> 
        
        </tr>
        {
         finalvendor && finalvendor.map(obj =>
            <tr style={{ textAlign: 'center', border: "solid" }}>
              <td>{obj.fpid.productID.productName}</td>
              <td>{obj.farmerID.firstname}</td>
              <td>{obj.vendorID.firstname}</td>
              <td>{obj.fpid.quantity}</td>
              <td>{obj.fpid.unit}</td>
              
           
              
               
            </tr>
          )
        }</thead>
        
      </table>
    </div>
  )
}
