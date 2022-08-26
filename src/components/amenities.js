import React,{useState} from "react";
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
function Amenities(){
    const [amenities,setAmenities]=useState(true);
    const [features,setFeatures]=useState(true);

function appear(x){
    
    if(x=='amenities'){
        amenities?setAmenities(false):setAmenities(true);
    }
    else{
        features?setFeatures(false):setFeatures(true);
    }
    
}
    
    return (<div>
        <a onClick={()=>{appear('amenities')}}>
        <div className="container">
            <div className="row">
        <div className="col">
           <h5 style={{fontFamily:'Cormorant Garamond',fontWeight:'bold'}}>Hotel Amenities</h5> 
        </div><div className="col" style={{display:'flex',justifyContent:'flex-end'}}>{amenities?<BsFillCaretUpFill/>:<BsFillCaretDownFill/>}</div></div>
        <div className="container" style={{height:'1px',backgroundColor:'black'}}></div></div>
        </a>
        <div className={amenities?"container":"container no-display"}>
            <div className="row">
                <div className="col-md-6">
                <p>
                <br></br>
                Free parking
                <br></br>
                Free High Speed Internet (WiFi)
                <br></br>
                Fitness Centre with Gym / Workout Room
                <br></br>
                Free breakfast
                <br></br>
                Airport transportation
                <br></br>
                Business Centre with Internet Access
                <br></br>
                Conference facilities
                <br></br>
                Baggage storage
                <br></br>
                Secured parking
                <br></br>
                Wifi
                <br></br>
                Restaurant
                <br></br>
                Breakfast buffet
                <br></br>
                Snack bar
                </p>
                </div>
                <div className="col-md-6">
                    <p>
                <br></br>
                Special diet menus
                <br></br>
Banquet room
<br></br>
Meeting rooms
<br></br>
Concierge
<br></br>
Currency exchange
<br></br>
Newspaper
<br></br>
Shared lounge / TV area
<br></br>
Doorperson
<br></br>
24-hour front desk
<br></br>
Dry cleaning
<br></br>
Laundry service
<br></br>
Ironing service
<br></br>
Shoeshine
</p>
                </div>
            </div>
        </div>
        <br></br>
        <a onClick={()=>{appear('features')}}>
        <div className="container">
            <div className="row">
        <div className="col">
            <h5 style={{fontFamily:'Cormorant Garamond',fontWeight:'bold'}}>Room Features</h5>
        </div><div className="col" style={{display:'flex',justifyContent:'flex-end'}}>{features?<BsFillCaretUpFill/>:<BsFillCaretDownFill/>}</div></div>
        <div className="container" style={{height:'1px',backgroundColor:'black'}}></div></div>
        </a>
        <div className={features?"container":"container no-display"}>
            <div className="row">
                <div className="col-md-6">
                <p>
                <br></br>
                Air conditioning
                <br></br>
                Housekeeping
                <br></br>
                Room service
                <br></br>
                Safe
                </p>
                </div>
                <div className="col-md-6">
                    <p>
                <br></br>
                Bottled water
                <br></br>
                Minibar
<br></br>
Flatscreen TV
</p>
                </div>
            </div>
        </div>
    </div>);
}
export default Amenities;