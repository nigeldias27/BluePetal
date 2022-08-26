import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LocationCard from './components/location_card';
import conference from './images/Rectangle15.png'
import SubHeading from './components/subheading';
import gym from './images/Rectangle16.png';
import dining from './images/overlay.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Amenities from './components/amenities';
function App() {
  return (
    <div>
      <div id='Heading'>
        <div id='Heading1'>
        <h1 style={{color:'white',marginTop:'-50px',textAlign:'center',fontWeight:'bold'}}>Welcome to BluPetal Hotel</h1>
         <a href='https://bookings.simplotel.com/?propertyId=5090'><button id='booknow' style={{paddingTop:'10px',paddingBottom:'10px',paddingLeft:'20px',paddingRight:'20px'}}>Book now</button>
          </a>
          </div>
      </div>
<SubHeading val="Hotel Overview"></SubHeading>
<AnimationOnScroll animateIn='animate__zoomIn' duration={0.75} animateOnce={true}>
<div className='container'>
  <div className='row card_overview'>
    <div className='col-md-6' >
      <p style={{fontSize:'1.2rem'}}>

Located in the busy locality of Koramangala, Bangalore, BluPetal offers a ready recluse from the hustle and bustle of the city, while at the same time ensuring that you are never too far away from its heart. Our round-the-clock travel desk and state-of-the-art infrastructure make this hotel the best destination for business travelers.<br></br><br></br> 
 
 With 33 well-furnished, clean and comfortable rooms, two in-house critically acclaimed restaurants, a gym, conference facilities, and Industry best COVID-safe protocol there is always space for you to sit back, feel safe and relish your most precious moments with our finest offering.<br></br><br></br>
  
 Our flawless service ensures that these precious moments remain the way you want them to be – exquisite and exclusive.
      </p>
    </div>
    <div className='col-md-6 order-first order-md-last order-lg-last' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <video width="320" height="240" autoPlay muted controls src='images/file.mp4'>
</video>
    </div>
    
  </div>
</div>
</AnimationOnScroll>
<SubHeading val="Location"></SubHeading>
<div id='location'>
<AnimationOnScroll animateIn='animate__zoomIn' duration={0.75} animateOnce={true}>
<LocationCard name="Kempegowda International Airport" logo="images/airport.png" distance="41.2 Km" time="56mins"/>
</AnimationOnScroll>
<AnimationOnScroll animateIn='animate__zoomIn' duration={0.75} animateOnce={true} delay={750}>
<LocationCard name="Forum Mall Koramangala" logo="images/basket.png" distance="700m" time="9mins"/>
</AnimationOnScroll>
<AnimationOnScroll animateIn='animate__zoomIn' duration={0.75} animateOnce={true} delay={1500}>
<LocationCard name="St John's Medical Hospital" logo="images/medicine.png" distance="1.1 Km" time="14mins"/>
</AnimationOnScroll>
</div>
<SubHeading val="Amenities"></SubHeading>
<Amenities></Amenities>
<SubHeading val="Gallery"></SubHeading>
<div className='container'>
  <div className='row'>
     
    <div id='gallery-mobile' className='col-md-6 gallery-mobile-begin' style={{ marginTop:'25px',backgroundImage: `url(${conference})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
  
    <div className='col-md-6'>
      <div id='gallery-mobile' className='col-md-12 gallery-mobile-end' style={{ marginTop:'25px',backgroundImage: `url(${gym})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
      <div id='gallery-mobile' className='col-md-12 gallery-mobile-end' style={{ marginTop:'25px',marginBottom:'25px',backgroundImage: `url(${dining})`,display:'flex',justifyContent:'center',alignItems:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <button className='btn btn-outline-light'>All photos</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
