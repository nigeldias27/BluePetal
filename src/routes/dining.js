import React from "react";
import RoomCard from "../components/room_card";
import background from '../images/dining_background.png';

function Dining(){
    return(
        <div>
                                <div style={{height:'50vh',backgroundImage:`url(${background})`,display:'flex',alignItems:'center',justifyContent:'center',backgroundPosition:'center bottom',backgroundSize:'cover'}}>
            <h1 style={{color:'white',marginTop:'-50px',textAlign:'center',fontWeight:'bold'}}>Dining</h1>
            </div>
            <div className="container" style={{marginTop:'15vh',marginBottom:'15vh'}}>
                <div className="row">
                    <div className="col-md-6">
                    <div style={{backgroundColor:'white',boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.25)',borderRadius:'5px'}}>
                        <img src="images/SultansofSpice.jpg" style={{borderRadius:'5px'}} width='100%' height='320px'></img>
                        <h2 className="center-room" style={{fontFamily:'Cormorant Garamond',fontWeight:'600',marginTop:'12px'}}>Sultans of Spice</h2>
                        <p style={{margin:'12px',fontFamily:'Noto Serif TC',paddingBottom:"12px"}}> 
                        From Kabul’s famous Damiyan food street to our very own purani Dilli ki galliyan, through the land of five rivers , Sultans of Spice is a specialty restaurant that offers culinary joys in the form of cuisines belonging to the old Delhi Sultanate. The sumptuous spreads, reminiscent of the royal tastes of the Sultans and Nawabs are craft-fully cooked with age-old robust cooking techniques that are packed with a punch of harmonious flavours and texture in every bite.
The cuisine at Sultans of Spice is proudly rich, robust, authentic and delicious.</p>
                        </div>
                       
                    
                    </div>
                    <div className="col-md-6">
                    <div style={{backgroundColor:'white',boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.25)',borderRadius:'5px'}}>
                        <img src="images/buff_buffet_buff.jpg" style={{borderRadius:'5px'}} width='100%' height='320px'></img>
                        <h2 className="center-room" style={{fontFamily:'Cormorant Garamond',fontWeight:'600',marginTop:'12px'}}>Buff Buffet Buff</h2>
                        <p style={{margin:'12px',fontFamily:'Noto Serif TC',paddingBottom:"12px"}}> 
                        Conceptualized around those with a champion appetite, Buff Buffet Buff is a multi-cuisine buffet restaurant that serves an assortment of 20 starters including a plethora of live counters and Bangalore's pioneering Mongolian grill.
Considering Buff Buffet Buff’s not so modest public reputation of being “The Rolls Royce” of buffet options in Bangalore, We at Buff Buffet Buff are proud to present a variety of cuisines from all over the world where we get to showcase our craftsmanship and quality.
Buff Buffet Buff is a multi-cuisine culinary journey that fills your stomach to the point it touches your heart.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dining;