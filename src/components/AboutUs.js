import React from 'react'
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

export default function AboutUs() {
    return (
        <div className=' container AboutUs height' >
            <h1 className='about'> ABOUT US </h1>
            {/* <h4>Digital Agriculture Procurment Market</h4> */}
            <div className='col-xl-4 list1'>
            <h2 className='l1'>Drawback of current working System</h2>
           <h5> <ol>
                <li>The distance is a big factor</li>
<li>The commission given to the middle men reduces the farmers income.</li>
 <li>The vendors can lobby and decide a fixed lower price as they know,
     the poor farmer has to travel miles with produces and has no means to carry it back again, thus depriving the farmers fair prices</li> 
<li>The vendors can delay the payment to the farmers </li>
            </ol></h5></div>

            <div className='col-xl-4 list2'>
<h2 className='l1'>What we propose….</h2>
<h5> <ol>
<li>Digitalizing the procurement by creating a common All India online portal for the farmers the vendors and the administration</li>
<li>Conducting E-Auctions.</li>
<li>Avoiding the middle-men </li>
<li>The farmers can have flexible market right at the click of a button</li> 
<li>farmer in one state can sell his produce anywhere in India like wise a vendor can buy any where in India</li>

</ol></h5></div>

{/* <div className='col-xl-4 list3'>
    <h1 className='l2'>Digital Agriculture Procurment Market </h1>
</div> */}

            

            
        </div>
    )
}
