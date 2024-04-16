import './Header.css';
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";



export default function Header(){
    return (
        <div className="header" >
        <div className="logo-container">
             <img src={logo}  alt="Logo" />
         </div>
      
        <div className="logo-text1">Tongariro 
        </div>          

        <div className="logo-text2">CINEMAS
              
        </div> 

        
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="account"><Link to="/login">Account</Link></li>
        </ul>

   




        </div>
    );
};