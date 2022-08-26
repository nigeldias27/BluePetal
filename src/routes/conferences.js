import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function Conferences(){
    return(<div>
                 <div style={{height:'50vh',backgroundImage:`url('images/conferences2dark.png')`,display:'flex',alignItems:'center',justifyContent:'center',backgroundPosition:'center 75%',backgroundSize:'cover'}}>
            <h1 style={{color:'white',marginTop:'-50px',textAlign:'center',fontWeight:'bold'}}>Conferences at BluPetal</h1>
            </div>
            <div className="container" style={{paddingTop:'15vh',paddingBottom:'15vh'}}>
            <div className="row" style={{backgroundColor:'white',boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.25)',borderRadius:'15px',margin:'12px'}}>
                <div className="col-md-6" style={{padding:'0px'}}>
                
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 contactus-border-radius"
          src="images/conferences1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 contactus-border-radius"
          src="images/conferences2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

                </div>
                <div className="col-md-6" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{paddingTop:'24px',paddingBottom:'24px'}}>
                    <p style={{fontFamily:'Noto Serif TC'}}>
The Perfect ambiance for your most important meetings offered to you at our conference rooms. With three seperate rooms of capacities upto 20 people, high speed internet, state of the art facilities and impecable service, we make sure you have a highly productive and seamless flow of events at your meetings.</p>
                </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Conferences;