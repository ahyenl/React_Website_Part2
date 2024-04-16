import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new
 
Date());
//   const [disabledDays, setDisabledDays] = useState([]);

  function isDayDisabled(date) {
    const day = date.getDay();
    // Disable Wednesdays and Sundays
    return day === 2 || day === 4;
  }

  return (
    <div>

      
<DatePicker

        
selected={startDate}

        
onChange={(date) => setStartDate(date)}
dateFormat="dd/MM/yyyy"
filterDate={isDayDisabled}
      />
    </div>
  );
};

export
 
default MyDatePicker;