import React, { useState } from 'react';
import './Seatselection.css';

const Seatselection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      const newSelectedSeats = selectedSeats.filter((id) => id !== seatId);
      setSelectedSeats(newSelectedSeats);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeats = () => {
    const rows = [];
    for (let rowNumber = 1; rowNumber <= 10; rowNumber++) {
      const seats = [];
      for (let seatNumber = 1; seatNumber <= 10; seatNumber++) {
        const seatId = `${rowNumber}-${seatNumber}`;
        const isSelected = selectedSeats.includes(seatId);
        seats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
      rows.push(<div className="row">{seats}</div>);
    }
    return rows;
  };

  const calculatePrice = () => {
    const pricePerSeat = 30;
    const selectedSeatCount = selectedSeats.length;
    const totalPrice = selectedSeatCount * pricePerSeat;
    return totalPrice;
  };

  return (
    <div className="show-times">

      <body>
       
        <div className="movie-info">

          <div className="seats-container">
            <div className="seat-selection">
              <div className="container">
                <div className="screen">Screen</div>

                {renderSeats()}

                <p className="text">
                  You have selected <span id="count">{selectedSeats.length}</span> seats for a price of $<span id="price">{calculatePrice()}</span>
                </p>
              </div>
            </div>

            <div className="showcase">
              <li>
                <div className="seat"></div>
                <small>Available</small>
              </li>
              <li>
                <div className="seat selected"></div>
                <small>Selected</small>
              </li>
              <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
              </li>
            </div>
          </div>
        </div>
      </body>

    </div>
  );
};

export default Seatselection;
