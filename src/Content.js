import './Content.css';
import Moviepics from './Moviepics.js'; // Imports the Header component from the ./Moviepics.js file


export default function Content(){
    return (    
        <div className="content-container">

            <Moviepics />    {/* This line renders the Moviepics component. */}      

            
       </div>
    );
}