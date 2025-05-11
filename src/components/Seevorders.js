import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom';


export default function Seevorders() {
  const [vapi, setvApi] = useState([]);

  let navigate = useNavigate();


  let productData = useSelector(state => state);
  let object = productData[0].obj;
  let vendorID = object.vendorID;
  console.log(vendorID);

  useEffect(() => {
    axios.get("http://localhost:8085/auction/getbids/" + vendorID)
      .then((res) => {
        // console.log("response");
        console.log(res);
        console.log(res['data']);

        setvApi(res['data'])
      })
  }, []); // for continous updateed  result write api inside the square bracket

  const goToProfile = (ev) => {
    navigate("/Profile")
  }
  // const goTofinalorder = (ev) => {
  //   navigate(`/Finalorders/${vendorID}`)
  // }
  

  // const deletefid = (ev, objvalue) => {

  //   let Fpid=objvalue.fpid;
  //   console.log(Fpid);
  //   axios.delete("http://localhost:8085/product/deletebyfpid/" + Fpid)
  //                 .then((res) => {
  //                     alert("deleted successfully")

  //                   // navigate('/SeefOrders');
  //                 })

    
  // }

  const goTofinalbid = (ev) => {
    navigate(`/Finalbids/${vendorID}`)
  }

 
  
  return (
    <div className="height" style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div> <h1 style={{ textAlign: "center", textShadow: "green 2px 2px" }}> My Products Details</h1>
      <button style={{ float: "right", marginTop: "-50px" }} onClick={goTofinalbid} className="btn btn-success">
          See Finalised Orders
        </button>
        &nbsp;&nbsp;
        <button style={{ float: "right", marginTop: "-50px" }} onClick={goToProfile} className="btn btn-success">
          Profile
        </button> </div>
        
      <table className='table table-bordered'>
        <thead><tr style={{ textAlign: 'center', border: "solid" }}>
          <th>Vendor Name</th>
          <th>Product Name</th>
          <th>Bidding Price</th>
          <th> Quality Rating</th>
          {/* <th>Quantity</th> */}
          </tr>
       
      
        {
          vapi && vapi.map(obj =>
            <tr style={{ textAlign: 'center', border: "solid" }}>
              <td>{obj.vendorID.firstname}</td>
              <td>{obj.fpid.productID.productName}</td>
              <td>{obj.biddingprice}</td>
              <td>{obj.fpid.qualityID.rating}</td>
            
             

               
                      <td><button className="btn btn-success" onClick={(e) => {
                var Aid = obj.auctionID;
                  console.log(Aid);
                axios.delete("http://localhost:8085/auction/deletebyaid/" + Aid)
                  .then((res) => {
                      alert("deleted successfully")

                    // navigate('/SeefOrders');
                  })


              }} >Delete</button></td>
            </tr>
          )
        }
         </thead>
      </table>

    </div>

  )
}

