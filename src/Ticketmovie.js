import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Ticketmovie.css';
import { Link } from "react-router-dom";


export default function Ticketmovie() {
  return (
    <div className="show-times">
        <Header />
        <body>
        <h2 className="ticket">You have successfully booked your ticket..</h2>
        
        <p className="vticket" >Please check your account dashboard & email for more information.. <br/> <br/> <br/> <br/> 
        <Link to="/profile">Click to your Account Dashboard</Link><br/> <br/> <br/> <br/> 
        Thank you for booking at Tongariro Cinema! Enjoy watching the movie!   </p>

        </body>
        <Footer />
        </div>
  )
}

