import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {

  const [Product , setProduct] = useState ("");

  const url="http://localhost:8085/farmer/login"
  const data={"product":Product}
  axios.post(url,data).then((Response)=>{
  const result=Response.data;})

  return (

    <div className='addproduct container container-fluid'>

      <form class="row g-3">
        
      <div class="col-md-9">
          <h2>Category Type</h2>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setProduct(event.target.value)}}>
            <option selected >Select Category</option>
            <option value="6001">Cereal</option>
            <option value="6002">Pulses</option>
            <option value="6003">Fruits</option>
            <option value="6004">Vegitables</option>
          </select>
        </div>
        <div class="col-md-9">
          <h2>Product Name</h2>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setProduct(event.target.value)}}>
            <option selected >Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="col-md-9">
          <h2>Quality</h2>
          <input type="text" class="form-control" id="inputCity" />
        </div>

        <div class="col-md-6">
          <h2>Price</h2>
          <input type="text" class="form-control" id="inputCity" />
        </div>
    
        <div class="col-9">
          <button type="submit" class="btn btn-primary">Add Product</button>
        </div>
      </form>

    </div>
  )
}