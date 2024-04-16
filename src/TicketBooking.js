import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Seatselection from './Seatselection';
import './TicketBooking.css';
import Payment from './Payment';

function TicketBooking() {
  return (
    <div className="show-times">
        <Header />
        <body>
        <h2>Ticket Booking</h2>
        <h4>Complete the details to book your movie ticket</h4>
        <div className="movie-info">
            <div className="header-table">
            </div>
        <table className="seat-category">
        <th>
        <h4 className="seats">Seat Selection</h4>       
       
            <Seatselection /> <br/><br/><br/>
            <hr></hr>
            <br/>
            <Payment />
        </th>
       
        </table>
        
        </div>

        </body>
        <Footer />
        </div>
  )
}

export default TicketBooking