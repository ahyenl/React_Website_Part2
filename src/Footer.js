import './Footer.css';
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import youtube from "./Images/youtube.png";

export default function Footer(){
    return(
        <footer> 
          <div className="logo-footer">
            <h5>Follow us on our social media</h5>
             <img src={facebook}  alt="fb" /><span>Facebook</span>
             <img src={instagram}  alt="ig" /><span>Instagram</span>
             <img src={youtube}  alt="youtube" /><span>Youtube</span>
             <h5 className="copyright">© 2023 Tongariro Cinemas. All rights protected.</h5>
          </div>
        </footer>
    );
}