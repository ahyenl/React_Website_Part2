import './Showtimes.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import mario from "./Images/mario.jpg";
import Calendar from "./Calendar";
import Time from "./Time";
import creator from "./Images/creator.jpg";
import Calendar1 from "./Calendar1";
import Time1 from "./Time1";
import dumbmoney from "./Images/dumbmoney.jpg"
import quantumania from "./Images/quantumania.jpg";
import TicketBooking from './TicketBooking';
import { Link } from "react-router-dom";


export default function Showtimes(){
    return ( 
        <div className="show-times">
        <Header />
        <body>
        <h2>SHOWTIMES</h2>
        <p>Choose when you'd like to watch your movie, and whether you'd like to upgrade your experience.</p>
        <h3>Book your time slot now!</h3>
        <div className="movie-info">
            <div className="header-table">
                <table>
                <tr>
            
                <th></th>
                </tr>
                </table>
            </div>
            <div className="showtime-mario">
             <table className="mario-info">  
              <tr className="bg">
               <th><img src={mario}  alt="mario" />
                <p>&nbsp;2023 |  PG | 1h 32m<br />
                Animation  | Comedy  |  Adventure</p></th>

                <th> <p className="tsmbm">The Super Mario Bros. Movie</p>
                <p className="description">A plumber named Mario <br/>travels through an underground<br/>labyrinth with 
                 his brother Luigi,<br/> trying to save a captured princess.</p><br/>
                <p className="dir">Directors: Aaron Horvath <br/> Michael Jelenic / Pierre Leduc</p>
                <p className="writer">Writer: Matthew Fogel</p>
                <p className="stars">Stars: Chris Pratt<br/>Anya Taylor-Joy / Charlie Day</p>
                </th>

                <th > <p className="std">Standard</p>
                <p className="std-days">Available by Monday-Friday only</p>
                <p>Select Date</p>
                <Calendar /> <br/> <Time /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                <th> <p className="std">Dolby Cinema</p>
                <p className="std-days">Available by Monday-Friday only</p>
                <p>Select Date</p>
                <Calendar /> <br/> <Time /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                
                </tr>
            </table>
            
            </div>

            <div className="showtime-mario">
             <table className="mario-info">  
              <tr className="bg">
               <th><img src={creator}  alt="mario" />
                <p>&nbsp;2023 | PG-13 | 2h 13m<br />
                Adventure  | Action  |  Drama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></th>

                <th> <p className="tsmbm">The Creator</p>
                <p className="description">Against the backdrop of a war <br/>between humans and robots<br/>with artificial intelligence,<br/> a former soldier finds the secret<br/> weapon, a robot in the form of a &nbsp;&nbsp;&nbsp; young child</p><br/>
                <p className="dir">Directors: Gareth Edwards</p>
                <p className="writer">Writer: Gareth Edwards & Chris Weitz</p>
                <p className="stars">Stars: John David Washington<br/>Madeleine Yuna Voyles / Gemma Chan</p>
                </th>

                <th> <p className="std">Standard</p>
                <p className="std-days">Available by Tuesday & Thursday only</p>
                <p>Select Date</p>
                <Calendar1 /> <br/> <Time1 /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                <th> <p className="std">Dolby Cinema</p>
                <p className="std-days">Available by Tuesday&Thursday only</p>
                <p>Select Date</p>
                <Calendar1 /> <br/> <Time1 /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                
                </tr>
            </table>
            
            </div>

            <div className="showtime-mario">
             <table className="mario-info">  
              <tr className="bg">
               <th><img src={dumbmoney}  alt="mario" />
                <p>&nbsp;2023 | R | 1h 45m<br />
                Biography  | Comedy  |  Drama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></th>

                <th> <p className="tsmbm">Dumb Money</p>
                <p className="description">David vs. Goliath tale about <br/>everyday people who flipped<br/>the script on Wall Street and <br/> got rich by turning GameStop  <br/>(the video game store) into the<br/>world's hottest company.</p><br/>
                <p className="dir">Directors: Craig Gillespie</p>
                <p className="writer">Writers: Lauren Schuker Blum / <br/> Rebecca Angelo / Ben Mezrich</p>
                <p className="stars">Stars: Paul Dano  <br/> Pete Davidson / Vincent D'Onofrio</p>
                </th>

                <th> <p className="std">Standard</p>
                <p className="std-days">Available by Tuesday & Thursday only</p>
                <p>Select Date</p>
                <Calendar1 /> <br/> <Time1 /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                <th> <p className="std">Dolby Cinema</p>
                <p className="std-days">Available by Tuesday&Thursday only</p>
                <p>Select Date</p>
                <Calendar1 /> <br/> <Time1 /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                
                </tr>
            </table>

            </div>

            <div className="showtime-mario">
             <table className="mario-info">  
              <tr className="bg">
               <th><img src={quantumania}  alt="mario" />
                <p>&nbsp;2023 | PG-13 | 2h 4m<br />
                Biography  | Comedy  |  Drama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></th>

                <th> <p className="tsmbm">Ant-Man and the Wasp: <br/>Quantumania</p>
                <p className="description">Scott Lang and Hope Van Dyne <br/>are dragged into the Quantum <br/>Realm, along with Hope's <br/>parents and Scott's daughter <br/>Cassie. Together they must find<br/> a way to escape, but what<br/>secrets is Hope's mother <br/>hiding? And who is the mysterious Kang?</p>
                <p className="dir">Director: Peyton Reed</p>
                <p className="writer">Writers: Jeff Loveness<br/>Stan Lee / Larry Lieber</p>
                <p className="stars">Stars: Paul Rudd<br/>Evangeline Lilly / Michael Douglas</p>
                </th>

                <th> <p className="std">Standard</p>
                <p className="std-days">Available by Tuesday & Thursday only</p>
                <p>Select Date</p>
                <Calendar /> <br/> <Time /> <br/>
                <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>
                </th>

                <th> <p className="std">Dolby Cinema</p>
                <p className="std-days">Available by Tuesday&Thursday only</p>
                <p>Select Date</p>
                <Calendar /> <br/> <Time /> <br/>
                {/* <button type="button" className="buttont">Ticket </button> */}
               {/* <Link to="/ticketbooking"> Ticket </Link> */}
               <button type="button" className="buttont"><Link to="/ticketbooking">Book Ticket </Link> </button>

                </th>

                
                </tr>
            </table>
            
            </div>

            
            

        </div>
        </body>
        <Footer />
        </div>   
        
    );
}