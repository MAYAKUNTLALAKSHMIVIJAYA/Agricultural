import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react'
import axios from 'axios';


import { useSelector } from 'react-redux';
export default function Farmerdash() {


  const dispatch = useDispatch()
  let navigate = useNavigate();

  let productData = useSelector(state => state);
  // <Provider store={productStore}>
  console.log("Show Redux Comp - Accessing Redux Storage Value bcoz of provider");
  console.log(productData[0].obj);
  let object = productData[0].obj;
  let fid = object.farmerID;
  let productid = useRef();
  let categoryid = useRef();
  let Qualityid = useRef();
  let quentity = useRef();
  let unit = useRef();

  const addproduct = (ev) => {
    ev.preventDefault();

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fulldate = `${year}/${month}/${day}`;
    console.log(fulldate);



    let pid = productid.current.value;
    console.log(pid);
    let qid = Qualityid.current.value;
    console.log(qid);
    let cid = categoryid.current.value;
    console.log(cid);

    var obj = {



      quantity: quentity.current.value,
      unit: unit.current.value,
      farmerID: {
        farmerID: fid
      },
      productID: {
        productID: pid
      },
      qualityID: {
        qualityID: qid
      },
      categoryID: {
        categoryID: cid
      }


    }





    console.log(obj);
    axios.post("http://localhost:8085/product/saveproduct", obj)
      .then((res) => {
        console.log(res);
        alert("Product added Successfully..")
        navigate("/SeeFOrders")

      })
  }
  const goToProfile=()=>{
    navigate("/Profile");
  }

  return (
    <div className='container height'>

      <h1>Add Product</h1> 

      <div className='addproduct container container-fluid'>

        <form class="row g-3" onSubmit={addproduct}>

          <div class="col-md-6">
            <h2>Category Type</h2>
            <select ref={categoryid} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required >
              <option selected  >Select Category</option>
              <option value="4001" >Cereal</option>
              <option value="4002" >Pulses</option>
              <option value="4003" >Fruits</option>
              <option value="4004" >Vegitables</option>
            </select>
          </div>
          <div class="col-md-6">
            <h2>Product Name</h2>
            <select ref={productid} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required>
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
              <option value="5018">Almond</option>
            </select>
          </div>

          <div class="col-md-6">
            <h2>Quality</h2>
            {/* <input ref={Qualityid} type="text" class="form-control" id="inputCity" /> */}
            <select ref={Qualityid} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required>
              <option selected >select your rating</option>
              <option value="6001">1</option>
              <option value="6001">2</option>
              <option value="6001">3</option>
              <option value="6001">4</option>
              <option value="6001">5</option>
              <option value="6002">6</option>
              <option value="6002">7</option>
              <option value="6003">8</option>
              <option value="6003">9</option>
              <option value="6004">10</option>
            </select>
          </div>

          <div class="col-md-6">
            <h2>Quantity</h2>
            <input ref={quentity} type="text" class="form-control" id="inputCity" required/>
          </div>

          <div class="col-md-9">
            <h2>Unit</h2>
            <select ref={unit}class="form-select form-select-lg mb-6" aria-label=".form-select-lg example" required>
              <option>Quintal</option>
              <option>Ton</option>
              <option>Kg</option>
              <option>Dozen</option>
            </select>
          </div>
          
          <div class="col-9 ">
            <button onClick={addproduct} type="submit" class="btn btn-primary">Add Product</button>
         &nbsp;&nbsp;&nbsp;
          <button className="btn btn-success " onClick={goToProfile} >Profile</button>
          </div>
        </form>

      </div>
    </div>
  )
}