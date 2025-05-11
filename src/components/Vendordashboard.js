// import React from 'react'

// export default function Vendordashboard() {
//   return (
//     <div>
//     <div className="fdash1"><h1>Vendor Dashboard</h1>
//     </div>
//     <div className="fdash2"><br/><br/>
//    <form action="/Farmers" > <button style={{width:"500px",height:"60px", backgroundColor:"gray",border:"solid",borderRadius:"0.3cm"}} >See All Farmers</button></form><br/><br/>
//    <form action="/Vendor" > <button style={{width:"500px",height:"60px", backgroundColor:"gray",border:"solid",borderRadius:"0.3cm"}} >See All Venders</button></form><br/><br/>
//    <form action="/TodaysRates" > <button style={{width:"500px",height:"60px", backgroundColor:"gray",border:"solid",borderRadius:"0.3cm"}} >Todays Rates</button></form><br/><br/>
//    <form action="/BuyProducts" > <button style={{width:"500px",height:"60px", backgroundColor:"gray",border:"solid",borderRadius:"0.3cm"}} >Buy Products</button></form><br/><br/>

//     </div>
// </div>
// )

// }



import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';




export default function Farmerdash() {

  // const dispatch = useDispatch()
  let navigate = useNavigate();
const[ mprice,setMprice]=useState("");
  

  let productData = useSelector(state => state);
  let object = productData[0].obj;
  let vid = object.vendorID;
  const [biddingprice, setbiddingprice] = useState("")
  const [quantity, setquantity] = useState("")

  // let fpid = useRef();

  const [bycategory, setbycategory] = useState('');
  const [byquality, setbyquality] = useState('');
  const [byproduct, setbyproduct] = useState('');
  const [apidata, setapidata] = useState([]);


  const getproduct = (ev) => {
    console.log(bycategory);

    ev.preventDefault();

    const data = { "categoryid": bycategory }
    console.log(data);
    axios.get(`http://localhost:8085/search/bycategory?categoryid=${bycategory}`).then((response) => {
      // const result = response.data
      console.log(response['data']);
      setapidata(response['data']);

      console.log("this is state data")


    })

  }

  const selectquality = (ev) => {
    console.log(bycategory);
    console.log(byquality);

    ev.preventDefault();

    const data = { "qualityid": bycategory }
    console.log(data);
    axios.get(`http://localhost:8085/search/byquality?qualityid=${byquality}&categoryid=${bycategory}`).then((response) => {
      // const result = response.data
      console.log(response['data']);
      setapidata(response['data']);

      console.log("this is state data")


    })

  }

  const getproductbyname = (ev) => {
    console.log(byproduct);
    console.log(byquality);

    ev.preventDefault();

    const data = { "qualityid": bycategory }
    console.log(data);
    axios.get(`http://localhost:8085/search/byproductname?productid=${byproduct}`).then((response) => {
      // const result = response.data
      console.log(response['data']);
      setapidata(response['data']);

      console.log("this is state data")


    })

  }


  const placebid = (ev, objvalue) => {
    setMprice(objvalue.productID.price)
    console.log("this is placebid function");
    console.log(objvalue);
    console.log(biddingprice);
    console.log(quantity);
    var obj =
    {

      "vendorID": {
        "vendorID": vid,
      },
      "fpid": {
        "fpid": objvalue.fpid,
      },
      "biddingprice": biddingprice,
      "quantity": quantity,


    }
    console.log(obj);
    console.log(biddingprice);
    console.log(mprice);

    if (quantity !== 0 && biddingprice>=mprice) {
      axios.post("http://localhost:8085/auction/savebid", obj)
        .then((res) => {
          console.log(res);
          alert("Your bid added successfully")
          navigate("/Vendordashboard");

        })
    }
    else if(biddingprice==0 || quantity==0) {
      alert(" Bidding price Or Quantity missing ")

    }
    else if(biddingprice<=mprice)  {
      alert("bidding price cannot be less than market price")
      
    }
  }

  const goback=(ev)=>{
    navigate("/Profile")
  }




  // const checkUser = (ev) => {

  //   ev.preventDefault();
  //   const logoutaction = {
  //     type: "ADD",
  //     payload: {
  //       obj: ""

  //     }
  //   }
  //   dispatch(logoutaction);
  //   navigate("/")
  // }
  return (
    <div className='vendorcontainer ' style={{height:"1500px"}}>


      <br />

      <div className='showproducts'>

        <div className='category'>
          <p>SEARCH BY CATEGORY</p>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => {
            setbycategory(e.target.value)
          }}   >
            <option selected  >Select Category</option>
            <option value="4001" >Cereal</option>
            <option value="4002" >Pulses</option>
            <option value="4003" >Fruits</option>
            <option value="4004" >Vegitables</option>
          </select>
          

          <p>
            <button class="btn btn-primary" onClick={getproduct} type="submit" >SEARCH</button></p>
        </div>
        <div className='category'>
          <p>SEARCH BY PRODUCT</p>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => {
            setbyproduct(e.target.value)
          }} >
            <option selected >select product name</option>
            <option value="5001">Wheat</option>
            <option value="5002">Rice</option>
            <option value="5003">Jowar</option>
            <option value="5004">Bajara</option>
            <option value="5005">MoogDal</option>
            <option value="5006">ChanaDal</option>
            <option value="5007">TurDal</option>
            <option value="5008">Onian</option>
            <option value="5009">Potato</option>
            <option value="5010">Tomato</option>
            <option value="5011">Leadyfinger</option>
            <option value="5012">Carrot</option>
            <option value="5013">Chilli</option>
            <option value="5014">Brinjal</option>
            <option value="5015">Apple</option>
            <option value="5017">Banana</option>
            <option value="5016">Grapes</option>

          </select>
          <p>
            <button class="btn btn-primary" onClick={getproductbyname} type="submit">SEARCH</button></p>
        </div>
        <div className='category' >
          <p>SELECT QUALITY</p>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => {
            setbyquality(e.target.value)
          }}  >
            <option selected >select your rating</option>
            <option value="6000">1</option>
            <option value="6000">2</option>
            <option value="6000">3</option>
            <option value="6000">4</option>
            <option value="6000">5</option>
            <option value="6001">6</option>
            <option value="6001">7</option>
            <option value="6002">8</option>
            <option value="6002">9</option>
            <option value="6003">10</option>
          </select>
          <p>
            <button class="btn btn-primary" onClick={selectquality} type="submit" >SEARCH</button></p>
        </div>
      </div>
<br/>

<button className="btn" style={{float:"right"}} onClick={goback}>GoBack</button>
      <table className='producttable table table-bordered '>

        <thead><tr>

          <th>Farmer</th>
          <th>PRODUCT NAME</th>
          <th>PRODUCT QUALITY</th>
          <th>MARKET PRICE(PerKg)</th>
          <th>QUANTITY</th>
          <th>Unit</th>
          <th>QUALITY ANALYSED PRICE</th>
          <th>MAKE A BID</th>
          <th>QUANTITY YOU WANT</th>

        </tr>
        {
          apidata && apidata.map(obj =>
            <tr>
              {/* <td    >{obj.fpid}</td> */}
              <td>{obj.farmerID.firstname}</td>
              <td>{obj.productID.productName}</td>
              <td>{obj.qualityID.rating}</td>
              <td >{obj.productID.price}</td>
              <td>{obj.quantity}</td>
              <td>{obj.unit}</td>
              <td >{parseInt(obj.productID.price*obj.quantity) +parseInt((obj.productID.price *obj.qualityID.increment)/100)}</td>
              <td><input type="text" class="form-control" id="inputCity" onChange={(event) => { setbiddingprice(event.target.value) }} required /></td>
              <td><input type="text" class="form-control" id="inputCity" onChange={(event) => { setquantity(event.target.value) }} required /></td>
              <td><button onClick={(event) => placebid(event, obj)} class="btn" >

                PLACE BID
              </button> </td>
            </tr>
          )}</thead>
      </table>

    </div>


  )
}
