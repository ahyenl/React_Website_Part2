
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
    <a href="#" onClick={() => handleOptionClick('12:00 NN')}>12:00 NN</a>
    <a href="#" onClick={() => handleOptionClick('04:00 PM')}>04:00 PM</a>
  </div>
  <p>Selected Time: {selectedTime}</p>
</div>
  )
}

export default Time