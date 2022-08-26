import React from "react";
import {Heading} from "../components/subheading";
import background from "../images/contact.png"
function ContactUs(){
    return(<div>
                    <div style={{height:'50vh',backgroundImage:`url(${background})`,display:'flex',alignItems:'center',justifyContent:'center',backgroundPosition:'center 75%',backgroundSize:'cover'}}>
            <h1 style={{color:'white',marginTop:'-50px',textAlign:'center',fontWeight:'bold'}}>Contact Us</h1>
            </div>

        <div className="container" style={{paddingTop:'15vh',paddingBottom:'15vh'}}>
            <div className="row" style={{backgroundColor:'white',boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.25)',borderRadius:'15px',margin:'12px'}}>
                <div className="col-md-6" style={{padding:'0px'}}>
                <img className="contactus-border-radius" src="images/home.jpg" width="100%" height="350px"></img> 
                </div>
                <div className="col-md-6" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{paddingTop:'24px',paddingBottom:'24px'}}>
                    <p>BluPetal- A Business Hotel
No. 60 Jyothi Nivas College Road,
Koramangala 5th Block,
Bangalore- 560095 <a style={{textDecoration:'none'}} href="https://www.google.co.in/maps/place/BluPetal+Hotel/@12.9335087,77.6130203,17z/data=!3m1!4b1!4m8!3m7!1s0x3bae1451c4a1008b:0xaaa7b13f604883e0!5m2!4m1!1i2!8m2!3d12.9335035!4d77.615209">Map</a></p>
                <p>Email: info@blupetalhotel.com</p>
                <p>Phone: +91-9742431818</p>
                <a href="https://wa.me/message/XOX3JYVHW26UB1">    
                <button className="whatsapp" style={{borderRadius:'50px',color:'white',border:'none',width:'200px'}}>Whatsapp us</button>
                </a>
                </div>
                </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'15vh'}}>
        <Heading val="Reach out to us"/>
        <input id="name-1" class="form-control" type="text" name="name" placeholder="Name" style={{width:'350px',marginTop:'10vh'}} />
        <input id="email-1" class="form-control" type="email" name="email" placeholder="Email" style={{width:'350px',marginTop:'12px'}} />
        <textarea id="message-1" class="form-control" name="message" rows="6" placeholder="Message" style={{width:'350px',marginTop:'12px'}}></textarea>
        <div style={{width:'350px',display:'flex',justifyContent:'flex-end',paddingTop:'12px'}}><button className="btn btn-primary">Send</button></div>
        
        </div>
        </div>
    )
}
export default ContactUs;