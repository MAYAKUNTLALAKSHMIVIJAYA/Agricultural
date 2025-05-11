import React from 'react'
import axios from 'axios';
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Finalorders() {
  let params = useParams();
  let fid = params.fid;
  console.log("farmer");
  console.log(fid);
  const  [final, setfinal] = useState([]);
 // const [api, setApi] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8085/finalorder/getbyfid/" + fid)
      .then((res) => {
        
        console.log(res['data']);
     
        console.log(res);
        setfinal(res['data']);
        console.log("state");
        console.log(final);
      })
  }, []);

//   const finalisebid = (ev, objvalue) => {
//     //ev.preventDefault();
//     console.log("this is finalisebid function");

//     let vid = objvalue.vendorID.vendorID;
//     let fproductid = objvalue.fpid.fpid;
//     let farmer = objvalue.fpid.farmerID.farmerID;
//     console.log("this is farmer");
//     console.log(farmer);

//     var obj =
//     {


//       "vendorID": vid,

//       "fpid": fproductid,

//       "farmerID": farmer,

//       "auctionID": objvalue.auctionID,




//     }
//     console.log(obj);

//     axios.post("http://localhost:8085/finalorder/savefinalorder", obj)
//       .then((res) => {
//         console.log(res);
//         alert("Transaction finalised");


//         navigate("/Seeforders");

//       })
//   }
const goback=(ev)=>{
  navigate("/SeefOrders")
}


  return (
    <div className="height">
      <button className="btn btn-success" onClick={goback} style={{float:"right"}}>GoBack</button>
      <table className=' table table-bordered'>

      <thead>  <tr>

          <th> FPID</th>
          <th>Farmer Name</th>
          <th>Vendor Name</th>
          {/* <th>PURCHASE QUANTITY</th> */}
          <th>PRODUCT NAME</th>
          <th>BIDDING PRICE</th>



          <th>FINALISE THE BID</th>


        </tr>
        {
          final && final.map(obj =>
            <tr style={{ textAlign: 'center', border: "solid" }}>
              <td>{obj.fpid.fpid}</td>
              <td>{obj.farmerID.firstname}</td>
              <td>{obj.vendorID.firstname}</td>
              
               {/*  <td>{obj.productID.productName}</td>
              <td>{obj.qualityID.rating}</td>
              <td>{obj.quantity}</td>
              <td>{obj.unit}</td>   */}
              
               
            </tr>
          )
        }</thead>
        
      </table>
    </div>
  )
}
