import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"





function MenuMobile() {

  const [hamburgerOn, setHamburgerOn] = useState(false); //toggles the menu for mobile users

  function toggleMobileMenu() {
    setHamburgerOn(hamburgerOn ? false : true)
  }
  


    return (
      <div className="MenuMobile">
          <div className="menuIcon" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={ faBars } />
          </div>
          <nav style={{display: hamburgerOn ? "none" : "block"}}>
            <ul className="mobileNav">
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        


            
 
      </div>
    );
  }
  
  export default MenuMobile;