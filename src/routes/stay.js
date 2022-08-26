import React from "react";
import background from '../images/room.png'
import RoomCard from "../components/room_card";
function Room(){
    return(
        <div>
            <div style={{height:'50vh',backgroundImage:`url(${background})`,display:'flex',alignItems:'center',justifyContent:'center',backgroundPosition:'center',backgroundSize:'cover'}}>
            <h1 style={{color:'white',marginTop:'-50px',textAlign:'center',fontWeight:'bold'}}>Rooms at BluPetal</h1>
            </div>

            <div className="container" style={{paddingTop:'15vh',paddingBottom:'15vh'}}>
                <div className="row">
                    <RoomCard margin='48px' image="images/room1.jpg" heading="Azure Room">The Azure room has twin beds, plush white interiors and facilities like
Wi-Fi, flat-screen TV with Satellite Channels, Laundry Services, direct dial Phone with voice messaging, Spacious work desk, Contact-less Mini Bar facilities, Hair Dryer and Electronic safe.</RoomCard>
                    <RoomCard margin='24px' image="images/room2.jpg" heading="Duke Room">The Duke room has a King size bed, with contemporary earthy interiors and wooden flooring. It also has facilities like Wi-Fi, flat-screen TV with Satellite Channels, Laundry Services, a direct dial Phone with voice messaging, Spacious work desk, Contact-less Mini Bar facilities, Hair Dryer and Electronic safe.</RoomCard>
                    <RoomCard image="images/room3.jpg" heading="Suite Royale Room">The Suite Royale has a classic black and white theme, it has a King size bed with a living area and a kitchenette for a long and comfortable stay. It also has facilities like Wi-Fi, flat-screen TV with Satellite Channels, Laundry Services, a direct dial Phone with voice messaging, Spacious work desk,
Contact-less Mini Bar facilities, Hair Dryer and Electronic safe.</RoomCard>
                </div>
            </div>
        </div>

        
    )
}
export default Room;