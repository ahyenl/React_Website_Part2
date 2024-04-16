import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route,} from 'react-router-dom';  //navigate between different pages or routes within the app.
import Aboutus from './Aboutus';
import Contact from './Contact';
import Movies from './Movies';
import Showtimes from './Showtimes';
import Login from './Login';
import TicketBooking from './TicketBooking';
import Ticketmovie from './Ticketmovie';
import Profile from './Profile';

const router = createBrowserRouter([
  {
    path: "/",        //This specifies the path that triggers the route. In this case, it's the root path "/", meaning the route will be matched when the user visits the homepage or the root URL of the application.
    element: <App />,    // display the App component whenever the user navigates to the root path of the application.
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "showtimes",
    element: <Showtimes />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "ticketbooking",
    element: <TicketBooking />,
  },
  {
    path: "ticketmovie",
    element: <Ticketmovie />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
