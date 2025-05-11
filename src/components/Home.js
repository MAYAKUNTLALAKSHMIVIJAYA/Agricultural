
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import logo1 from '../images/animated1.gif';
import logo2 from '../images/animated1.gif';
import logo3 from '../images/animated2.gif';


const data = [
    {
        image: require('../images/carousal10.jpg'),
        caption: "",
        description: ""
    },
    {
        image: require('../images/cara2.jpg'),
        caption: "",
        description: ""
    },
    {
        image: require('../images/cara1.jpg'),
        caption: "",
        description: ""
    }
]
export default function Home() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='home2' style={{height:'730px'}}>

            <div className='home' >
                {/* <h1 style={{ color: "green", fontFamily: "sans-serif" }}><b>Welcome To Online Agriculture  Market</b></h1>
                <h2 style={{ color: "green" }}>Build Farmer Build Nation</h2> */}
                <div className='ThickerBox'>

                    <marquee><h1 className='marquee'>
                    <img className="logoimg img-fluid" style={{height:'150px'}} src={logo1}></img>
                    Know Your Farmer, Know Your Food.! 
                      <img className="logoimg img-fluid" style={{height:'150px'}} src={logo1}></img>
                       </h1>
                    </marquee><div className="home1"></div>
                </div>

                <pre>





                </pre>
            </div>  
            <div className="">
            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image" style={{width:"100%"}, {height: "570px"}}
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel> */}
    <div className='container'>
      <div className='row'>
    <div className='col-xl-4 logo1 '>
      <div>
      {/* <img className="logoimg img-fluid" style={{height:'275px'}} src={''}></img> */}
        <marquee style={{height:'275px'}} scrollamount="2"  direction = "up"><h1 className='marquee1'  >
      
        farmer in one state can sell <br/>
        his product anywhere in India<br/>
         like wise a vendor can buy<br/>
          any where in India
                   
                       </h1>
                    </marquee><div className="home1"></div>
      </div>

      <div>
      <br/> <br/> 
      <table class="table text-start ">
               <thead>
               <tr class="table-danger">
                    <th ><h3><b>Features</b> </h3></th>
                  </tr>
                  <tr class="table-info">
                    <th ><b>Open Farmer Login</b> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-info">
                    <td className='hometable'> Farmer can Add Crop</td>
                  </tr>
                  <tr class="table-info">
                    <td>Farmer Can Select Maximum Bid</td>
                  </tr>
                  <tr class="table-info">
                    <td >Finally Sell The Crop</td>
                  </tr>
                </tbody>
              </table>
      </div>
            </div> 

     <div className='col-xl-4 logo1 '><img className="img-fluid logo1" src={logo2}></img></div>

    <div className='col-xl-4 logo1 '>
      <div>
      <img className="logoimg img-fluid" style={{height:'275px'}} src={logo3}></img>
      </div>

      <div>
      <br/> <br/> 
      <table class="table text-start ">
               <thead>
               <tr class="table-danger">
                    <th ><h3><b>Features</b> </h3></th>
                  </tr>
                  <tr class="table-info">
                    <th ><b>Open Vendor Login</b> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-info">
                    <td className='hometable'> Vendor Can Search Crops</td>
                  </tr>
                  <tr class="table-info">
                    <td>Bid On that Crop</td>
                  </tr>
                  <tr class="table-info">
                    <td >Can Buy the Crop Virtually</td>
                  </tr>
                </tbody>
              </table>
      </div>
      
      </div> 
    </div>
    </div>
            </div>            
            </div>

    )
}

