import React from "react"
function Footer(){
    return(
        <div>
            <div style={{backgroundColor:'#608EC1',paddingTop:'24px',paddingBottom:'24px'}}>
<div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <p style={{fontWeight:'bolder',color:'white'}}>Address</p>
        <p style={{color:'#D1DEED'}}>BluPetal- A Business Hotel<br></br>
No. 60 Jyothi Nivas College Road,<br></br> Koramangala 5th Block,<br></br> Bangalore- 560095
</p>
      </div>
      <div className='col-md-4'>
        <p style={{fontWeight:'bolder',color:'white'}}>E-mail</p>
        <p style={{color:'#D1DEED'}}>info@blupetalhotel.com</p>
        <p style={{fontWeight:'bolder',color:'white'}}>Tel</p>
        <p style={{color:'#D1DEED'}}>+91-9742431818</p>
      </div>
      <div className='col-md-4'>
        <img src='images/tripadvisor.png' height='150px'></img>
      </div>
    </div>
</div></div>
<div style={{width:'100vw',height:'50px',backgroundColor:'#2B4A6E',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <p style={{color:'white',marginBottom:'0px'}}>@2009 BluePetal Hotel</p>
</div>
        </div>
    )
}
export default Footer