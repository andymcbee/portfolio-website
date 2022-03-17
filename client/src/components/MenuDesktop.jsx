import { Link } from "react-router-dom";






function MenuDesktop() {




    return (
      <div className="MenuDesktop">

          <nav>
            <ul className="desktopNav">
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        


            
 
      </div>
    );
  }
  
  export default MenuDesktop;