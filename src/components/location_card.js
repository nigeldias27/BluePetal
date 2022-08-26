import React from "react";
function LocationCard(props){
    
    return(
        <div id="location-card">
            <div id="location-box">
                <h2 style={{color:'#A7C0DD',fontWeight:'700',fontFamily:'Cormorant Garamond'}}>{props.name}</h2>
                <h3 style={{color:'#D1D1D1',fontFamily:'Noto Serif TC'}}>{props.distance} . {props.time}</h3>
            </div>
            <img src={`${props.logo}`} style={{width:'175px',height:'104px',marginRight:'25px'}}></img>
            
        </div>
    );
}
export default LocationCard;