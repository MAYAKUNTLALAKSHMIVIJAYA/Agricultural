import React from 'react';
import fb from '../images/facebook.png'
import insta from '../images/insta1.png'
import twit from '../images/twitter.png'

export default function Footer(){
    return(
        <div className='footer' style={{color:'black'}}>
          <footer><h3>  &copy; Digital Agriculture Procurment market</h3><img src={fb} style={{height:'30px',width:'30px'}}/>
         <img src={insta} style={{height:'30px',width:'50px',paddingLeft:'20px'}}/>
          <img src={twit} style={{height:'30px',width:'50px',paddingLeft:'20px'}}/></footer>
        </div>
    )
}