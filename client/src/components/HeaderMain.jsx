
import React from 'react';
import "./HeaderMain.css"
import MenuDesktop from "./MenuDesktop"
import MenuMobile from "./MenuMobile"






function HeaderMain() {





    return (
      <div className="HeaderMain">



<div className="headerNavContainer">
  <div>
      <MenuDesktop /> 
      <MenuMobile />
  </div>
 
</div>





        
      </div>
    );
  }
  
  export default HeaderMain;