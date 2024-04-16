import React, { useState } from 'react'; //imports two essential components from the react package:
import { Link } from "react-router-dom";
import './Payment.css'

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting payment form:', formData);
  };

  return (
    <div className="payment-form">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name on Card:&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br/>
        <br/>
        <label htmlFor="cardNumber">Card Number:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="tel"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{16}"
        />
        <br/>
        <br/>
        <div className="expiry-cvv">
          <div>
            <label htmlFor="expiryDate">Expiry Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
              type="month"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <br/>
          <br/>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="number"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              pattern="[0-9]{3}"
            />
          </div>
        </div>
        <br/>
          <br/>
        <button className="btnp" type="submit"><Link to="/ticketmovie">Pay Now</Link></button>
      </form>
    </div>
  );
};

export default PaymentForm;
