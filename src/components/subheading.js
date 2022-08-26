import React from "react";
function SubHeading(props){
    return(
        <div>
                  <div style={{display:'flex',marginTop:'25px',marginBottom:'25px',alignItems:'center'}}>
        <div style={{height:'2px',backgroundColor:"#8BACD2",width:'calc(50vw - 75px)'}}></div>
        <h5 style={{width:'150px',fontWeight:'bold',color:'#608EC1',margin:'0px',textAlign:'center',fontFamily:'Cormorant Garamond',fontWeight:'bold'}}>{props.val}</h5>
        <div style={{height:'2px',backgroundColor:"#8BACD2",width:'calc(50vw - 75px)'}}></div>
      </div>
        </div>
    )
}
export default SubHeading;

function Heading(props){
  return(
      <div>
                <div style={{display:'flex',marginTop:'25px',marginBottom:'25px',alignItems:'center'}}>
      <div style={{height:'2px',backgroundColor:"#8BACD2",width:'calc(50vw - 100px)'}}></div>
      <h4 style={{width:'200px',fontWeight:'bold',color:'#608EC1',margin:'0px',textAlign:'center',fontFamily:'Cormorant Garamond',fontWeight:'bold'}}>{props.val}</h4>
      <div style={{height:'2px',backgroundColor:"#8BACD2",width:'calc(50vw - 100px)'}}></div>
    </div>
      </div>
  )
}
export {Heading};

