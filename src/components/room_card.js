import React from "react";
function RoomCard(props){
return(
<div className="col-md-4">
    <div style={{backgroundColor:'white',boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.25)',borderRadius:'5px'}}>
                        <img src={`${props.image}`} style={{borderRadius:'5px'}} width='100%' height='200px'></img>
                        <h2 className="center-room" style={{fontFamily:'Cormorant Garamond',fontWeight:'600',marginTop:'12px'}}>{props.heading}</h2>
                        <p style={{margin:'12px',fontFamily:'Noto Serif TC',fontWeight:'300',paddingBottom:`${props.margin}`}}>{props.children}</p>
                        </div>
                    </div>
)
}

export default RoomCard;