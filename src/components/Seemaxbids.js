// import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react'
// import { useNavigate} from 'react-router-dom';
// import { useParams } from "react-router-dom";

// export default function Seemaxbids() {
//   let params = useParams();
//   let fpid = params.fpid;
//   console.log(fpid);
//   const [apidata, setapidata] = useState([]);
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8085/auction/getmaxbidders/" + fpid)
//       .then((res) => {
//         // console.log("response");
//         //console.log(res);
//         console.log(res['data']);

//         setapidata(res['data'])
//       })
//   }, []);

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
//       "finalID": 9,
//         "auctionID": objvalue.auctionID,
//         "vendorID": {
//           "vendorID": vid
//         },
//         "farmerID": {
//           "farmerID": farmer
//         },
//         "fpid": {
//           "fpid": fproductid
//         }
//         }
//     // {


//     //   "vendorID": vid,

//     //   "fpid": fproductid,

//     //   "farmerID": farmer,

//     //   "auctionID": objvalue.auctionID,




//     // }

   
//     console.log(obj);

//     axios.post("http://localhost:8085/finalorder/savefinalorder", obj)
//       .then((res) => {
//         console.log(res);
//         alert("Transaction finalised");


//         navigate("/Seeforders");

//       })
//   }


//   return (
//     <div>
//       <table className='producttable table table-bordered'>

//        <thead> <tr>

//           <th>Vendor</th>
//           <th>BID DATE</th>
//           <th>PURCHASE QUANTITY</th>
//           <th>PRODUCT NAME</th>
//           <th>BIDDING PRICE</th>



//           <th>FINALISE THE BID</th>


//         </tr>
//         {
//           apidata && apidata.map(obj =>
//             <tr>
//               {/* <td    >{obj.fpid}</td> */}
//               <td>{obj.vendorID.firstname}</td>

//               <td>{obj.biddate}</td>
//               <td>{obj.quantity}</td>
//               <td>{obj.fpid.productID.productName}</td>
//               <td>{obj.biddingprice}</td>

//               <td  >{parseInt(obj.fpid.productID.price) * parseInt(obj.fpid.qualityID.increment)}</td>

//               <td><button className="btn" onClick={(event) => finalisebid(event, obj)} className="">

//                 FINALISE BID
//               </button> </td>
//             </tr>
//           )}</thead>
//       </table>
//     </div>
//   )
// }
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Seemaxbids() {
  let params = useParams();
  let fpid = params.fpid;
  console.log(fpid);
  const [apidata, setapidata] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8085/auction/getmaxbidders/" + fpid)
      .then((res) => {
        // console.log("response");
        //console.log(res);
        console.log(res['data']);

        setapidata(res['data'])
      })
  }, []);

  const finalisebid = (ev, objvalue) => {
    //ev.preventDefault();
    console.log("this is finalisebid function");

    let vid = objvalue.vendorID.vendorID;
    let fproductid = objvalue.fpid.fpid;
    let farmer = objvalue.fpid.farmerID.farmerID;
    console.log("this is farmer");
    console.log(farmer);

    var obj =
    {
      "finalID": 9,
        "auctionID": objvalue.auctionID,
        "vendorID": {
          "vendorID": vid
        },
        "farmerID": {
          "farmerID": farmer
        },
        "fpid": {
          "fpid": fproductid
        }
        }
    // {


    //   "vendorID": vid,

    //   "fpid": fproductid,

    //   "farmerID": farmer,

    //   "auctionID": objvalue.auctionID,




    // }

   
    console.log(obj);

    axios.post("http://localhost:8085/finalorder/savefinalorder", obj)
      .then((res) => {
        console.log(res);
        alert("Transaction finalised");


        navigate("/Seeforders");

      })
  }


  return (
    <div>
      <table className='producttable table table-bordered'>

       <thead> <tr>

          <th>Vendor</th>
          <th>BID DATE</th>
          <th>Market Price</th>
          
          <th>PRODUCT NAME</th>
          <th>PURCHASE QUANTITY</th>
          <th>BIDDING PRICE</th>

        </tr>
        {
          apidata && apidata.map(obj =>
            <tr>
              {/* <td    >{obj.fpid}</td> */}
              <td>{obj.vendorID.firstname}</td>

              <td>{obj.biddate}</td>
              <td>{obj.fpid.productID.price}</td>
              <td>{obj.fpid.productID.productName}</td>
              <td>{obj.quantity}</td>
              <td>{obj.biddingprice}</td>

              {/* <td  >{parseInt(obj.fpid.productID.price) + parseInt(obj.fpid.qualityID.increment)}</td> */}
         
              <td><button className="btn" onClick={(event) => finalisebid(event, obj)} >

                FINALISE BID
              </button> </td>
            </tr>
          )}</thead>
      </table>
    </div>
  )
}
