import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


// export default function SeefOrders() {
//   const [api, setApi] = useState([]);


//   let navigate = useNavigate();



//   let productData = useSelector(state => state);
//   let object = productData[0].obj;
//   let farmerID = object.farmerID;
//   console.log(farmerID);

//   useEffect(() => {
//     axios.get("http://localhost:8085/product/getproducts/" + farmerID)
//       .then((res) => {
//         // console.log("response");
//         console.log(res);
//         console.log(res['data']);

//         setApi(res['data'])
//       })
//   }, []);

//   const goToProfile = (ev) => {
//     navigate("/Profile")
//   }


//   console.log("API DATA", api);
//   return (
//     <div style={{ marginLeft: "20px", marginRight: "20px" }}>
//       <div> <h1 style={{ textAlign: "center", textShadow: "green 2px 2px" }}> My Products Details</h1>
//         <button style={{ float: "right", marginTop: "-50px" }} onClick={goToProfile} className="btn btn-success btn-lg">
//           Profile
//         </button> </div>
//       <table className='table'>
//         <thead><tr style={{ textAlign: 'center', border: "solid" }}>
//           <th>Fpid</th>
//           <th>Product Name</th>
//           <th>Category</th>
//           <th>Date</th>
//           <th> Quality Rating</th>
//           <th>Quantity</th>
//           <th>Unit</th></tr>
//         </thead>
//         {
//           api && api.map(props =>
//             <tr style={{ textAlign: 'center', border: "solid" }}>
//               <td>{props.fpid}</td>
//               <td>{props.productID.productName}</td>
//               <td>{props.categoryID.cattype}</td>
//               <td>{props.orderdate}</td>
//               <td>{props.qualityID.rating}</td>
//               <td>{props.quantity}</td>
//               <td>{props.unit}</td>
//               {/* <td><Link 
//                             class="nav-link" 
//                             to={"/DeleteFpid/"+props.fpid}>Delete</Link></td> */}
              // <td><button onClick={(e) => {
              //   var Fpid = props.fpid;
              //     console.log(Fpid);
              //   axios.delete("http://localhost:8085/product/deletebyfpid/" + Fpid)
              //     .then((res) => {
              //         alert("deleted successfully")

              //       // navigate('/SeefOrders');
              //     })


              // }} >Delete</button></td>
//             </tr>
//           )
//         }
//       </table>

//     </div>

//   )
// }


export default function SeefOrders() {
  const [api, setApi] = useState([]);

  let navigate = useNavigate();


  let productData = useSelector(state => state);
  let object = productData[0].obj;
  let farmerID = object.farmerID;
  console.log(farmerID);

  useEffect(() => {
    axios.get("http://localhost:8085/product/getproducts/" + farmerID)
      .then((res) => {
        // console.log("response");
        console.log(res);
        console.log(res['data']);

        setApi(res['data'])
      })
  }, []); // for continous updateed  result write api inside the square bracket

  const goToProfile = (ev) => {
    navigate("/Profile")
  }
  const goTofinalorder = (ev) => {
    navigate(`/Finalorders/${farmerID}`)
  }
  

  const deletefid = (ev, objvalue) => {

    let Fpid=objvalue.fpid;
    console.log(Fpid);
    axios.delete("http://localhost:8085/product/deletebyfpid/" + Fpid)
                  .then((res) => {
                      alert("deleted successfully")

                    // navigate('/SeefOrders');
                  })

    
  }

  const maxBid = (ev,object) => {
    navigate(`/Seemaxbids/${object.fpid}`)
  }
  


  console.log("API DATA", api);
  return (
    <div className="height" style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div> <h1 style={{ textAlign: "center", textShadow: "green 2px 2px" }}> My Products Details</h1>
      <button style={{ float: "right", marginTop: "-50px" }} onClick={goTofinalorder} className="btn btn-success btn-lg">
          See Finalised Orders
        </button>
        <button style={{ float: "right", marginTop: "-50px" }} onClick={goToProfile} className="btn btn-success btn-lg">
          Profile
        </button> </div>
        
      <table className='table table-bordered '>
        <thead><tr style={{ textAlign: 'center', border: "solid" }}>
          <th>Fpid</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Date</th>
          <th> Quality Rating</th>
          <th>Quantity</th>
          <th>Unit</th></tr>
      
        {
          api && api.map(obj =>
            <tr style={{ textAlign: 'center', border: "solid" }}>
              <td>{obj.fpid}</td>
              <td>{obj.productID.productName}</td>
              <td>{obj.categoryID.cattype}</td>
              <td>{obj.orderdate}</td>
              <td>{obj.qualityID.rating}</td>
              <td>{obj.quantity}</td>
              <td>{obj.unit}</td>
              {/* <td><button onClick={(event) => highestbid(event, obj)} className="">

                SEE HIGHEST BID 
              </button> </td> */}
                {/* <td><Link
                class="nav-link"
                to={"/Seemaxbids/" + obj.fpid}>SEE HIGHEST BID</Link></td> */}
                <td><button className="btn btn-success" onClick={(event) => maxBid(event, obj)}>See Highest Bid</button></td>
              <td><button className="btn btn-success" onClick={(event) => deletefid(event, obj)}>Delete</button></td>
            </tr>
          )
        }  </thead>
      </table>

    </div>

  )
}

