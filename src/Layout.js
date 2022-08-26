import React from "react";
import Room from "./routes/stay";
import App from "./App";
import background from './images/background.png';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from "react-router-dom";
import ContactUs from "./routes/contactus";
import Conferences from "./routes/conferences";
import Dining from "./routes/dining";
function Layout(){
    return(<div style={{ backgroundImage: `url(${background})` }}>
    <Navbar/>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stay" element={<Room />} />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/conferences' element={<Conferences/>}/>
        <Route path='/dining' element={<Dining/>}/>
        </Routes>
        <Footer/>
    </div>
    )
}
export default Layout