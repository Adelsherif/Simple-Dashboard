import React from "react";
import { FaBars,FaSearch,FaApple } from "react-icons/fa";
import admin from './admin.jpg'
import './header.css';


const Header= () =>{
    function tst(){
        document.getElementById("links").classList.toggle("toggler");
        document.getElementById("header").classList.toggle("headwidth");
    }
    return(
       <div className="header" id="header">
        <div className="bar" >
            <FaApple className="brandicon"/>
             <FaBars className="baricon" onClick={() =>tst()}/>
        </div>
        <div className="form">
           <FaSearch className="searchicon" />
           <input type="text" placeholder="Search Here" />
        </div>
        <div className="admin">
           <img src={admin} alt="image" />
        </div>
       </div>
    )
}

export default Header;