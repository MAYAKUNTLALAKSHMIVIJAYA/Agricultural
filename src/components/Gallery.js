

import React from 'react';


import a from '../images/g5.jpg'
import b from '../images/g2.jpg'
import c from '../images/9.jpeg'
import d from '../images/g4.jpg'
import e from '../images/5.jpg'
import f from '../images/g7.jpg'
import g from '../images/g7.jpg'
import h from '../images/g8.jpg'
import i from '../images/g9.jpg'
import j from '../images/10.jpg'


export default function Gallery() {
  return (
  <body>
      
    <h1 style={{textAlign:"center",margin:"30px 0 30px",color:"green",textShadow:"black 2px 2px"}}>Gallery</h1>
    <div className='gallery'>
      
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={a}></img></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={b}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={c}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={d}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={e}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={f}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={g}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={h}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={i}/></div>
    <div className='col-2 gallerycol-2'><img className="imgGallery" src={j}/></div>
     
     
    </div>
</body>)

}



/*
import React from 'react';


import a from '../images/1.jpg'
import b from '../images/2.jpg'
import c from '../images/3.jpg'
import d from '../images/4.jpeg'
import e from '../images/5.jpg'
import f from '../images/6.jpg'
import g from '../images/7.jpg'
import h from '../images/8.jpg'


export default function Gallery() {
  return (
  <body>
      
    <h1>Image gallery design</h1>
    <div className='gallery'>

    <div class="row">

        <div class="column"> 
             <img src={a}></img>
        </div>

        <div class="column"> 
            <img src={b}/>
      </div>

      <div class="column"> 
            <img src={c}/>
     </div>  

     <div class="column"> 
            <img src={d}/>
    </div>        

    <div class="column"> 
             <img src={e}/>
     </div>        

     <div class="column"> 
             <img src={f}/>
    </div> 

      <div class="column"> 
             <img src={g}/>
      </div> 

      <div class="column"> 
            <img src={h}/>
      </div>
    </div>
    </div> 
</body>)

}




*/


