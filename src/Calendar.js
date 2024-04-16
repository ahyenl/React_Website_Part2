import React, { useState } from 'react'; // This line imports the React library and the useState hook from the 'react' package. The useState hook is a React hook that allows you to manage state in functional components.
import DatePicker from 'react-datepicker'; // This line imports the DatePicker component from the 'react-datepicker' package. The DatePicker component is a React component that provides a date picker for selecting dates.
import 'react-datepicker/dist/react-datepicker.css' //This line imports the CSS styles for the react-datepicker component. This ensures that the date picker will be styled correctly.

//This line defines a React functional component named MyDatePicker. Functional components are a concise way to write React components using JavaScript functions
const MyDatePicker = () => {    
  // This line declares a state variable named startDate using the useState hook. The useState hook takes an initial value as an argument, which in this case is a new Date object. The setStartDate function is used to update the startDate state variable.
  const [startDate, setStartDate] = useState(new
 
Date());
//   const [disabledDays, setDisabledDays] = useState([]);

  function isDayDisabled(date) {
    const day = date.getDay();
    // Disable Wednesdays and Sundays
    return day === 1 || day === 2 || day === 3 || day === 4 || day === 5;
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