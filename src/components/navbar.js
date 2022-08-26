import React,{useState} from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg';
function Navbar() {
const [opened,setopened]=useState(false);
function clicked(){
    if(opened){
        setopened(false);
    }
    else{
        setopened(true);
    }
}
return(<div>
<Nav className="navbar navbar-light navbar-expand-md-py-3">
<div className="container">
    <a className="navbar-brand d-flex align-items-center">
        <div style={{ backgroundImage: `url(${logo})`,width:'100px',height:'50px',backgroundSize:'100%',backgroundRepeat:'no-repeat' }}></div></a>
        <div className={opened?"navbar-nav ms-auto dir opened container":"navbar-nav ms-auto dir"}>
            <div className="nav-item"><Link to="/" style={{textDecoration:'none'}}><a className="nav-link">Home</a></Link></div>
            <div className="nav-item"><Link to="/stay" style={{textDecoration:'none'}}><a className="nav-link" >Stay</a></Link></div>
            <div className="nav-item"><Link to="/conferences" style={{textDecoration:'none'}}><a className="nav-link" >Conferences &amp; Business</a></Link></div>
            <div className="nav-item"><Link to='/dining' style={{textDecoration:'none'}}><a className="nav-link" >Dining</a></Link></div>
            <div className="nav-item"><Link to="/contactus" style={{textDecoration:'none'}}><a className="nav-link" >Contact Us</a></Link></div>
        </div>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2" onClick={clicked}><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
</div>
</Nav>
</div>)   
}
export default Navbar