import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function ShowOngoingLot() {
    const[api,setApi] = useState([]);

 let  fid= localStorage.farmerID;
 console.log(fid);

    useEffect(()=>{
      const data = new FormData()
      
          data.append('fid', fid)
        axios.get("http://localhost:8085/product/getProducts",data)
        .then((res)=>{
            // console.log("response");
             console.log(res);
            console.log(res['data']);
      
            setApi(res['data'])
        })
      } , []);
      
        
      
  return (
    <div>
    <table className='table'>

    <tr>
      <th>farmerID</th>
      <th>ProductID</th>
      <th>Order Date</th>
      <th>Quantity</th>
      <th>Unit</th>
    </tr>

  {
      
  api && api.map( props=>
    <tr>
      <td>${props.farmerID}</td>
      <td>${props.ProductID}</td>
      <td>${props.Orderdate}</td>
      <td>${props.quantity}</td>
      <td>${props.unit}</td>
    </tr>)
    }
  </table>
  </div>
  )
}
