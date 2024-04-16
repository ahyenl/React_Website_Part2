import React from 'react';
import './Profile.css';
import Header from './Header';
import Footer from './Footer';

export default function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <body>
        <h2>Account Dashboard</h2>
        <div className="profile-details">
          <table className="dashboard">
            <h3 className="pinfo">Profile Information</h3>
            <tr className="pinfo"><th>Name:</th>Test</tr>
            <tr className="pinfo"><th>Email:</th>Test@yahoo.com</tr>
            <tr className="pinfo"><th>Contact no.:</th>012345678</tr>
            <h3 className="pinfo">Booking Details</h3>
            <tr className="pinfo"><th>Ticket no.:</th>123456</tr>
            <tr className="pinfo"><th>Order Status:</th>Confirmed</tr>
            <tr className="pinfo"><th>Order History</th></tr>
          </table>
        </div>
      </body>
      <Footer />
    </div>
  );
}
