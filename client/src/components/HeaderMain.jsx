import { Link } from "react-router-dom";
import "./HeaderMain.css"



function HeaderMain() {
    return (
      <div className="HeaderMain">

        <nav>
            <ul className="navUl">
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default HeaderMain;