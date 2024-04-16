
import React, { useState } from 'react';
import './Time.css';

function Time() {
    const [selectedTime, setSelectedTime] = useState('');

    const handleOptionClick = (time) => {
        setSelectedTime(time);
    };

  return (
    <div class="dropdown">
  <button class="dropbtn">Select Time</button>
  <div class="dropdown-content">
    <a href="#" onClick={() => handleOptionClick('10:00 AM')}>10:00 AM</a>
    <a href="#" onClick={() => handleOptionClick('03:00 PM')}>03:00 PM</a>
    <a href="#" onClick={() => handleOptionClick('07:00 PM')}>07:00 PM</a>
  </div>
  <p>Selected Time: {selectedTime}</p>
</div>
  )
}

export default Time