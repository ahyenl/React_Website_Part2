import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import youtube from "./Images/youtube.png";  //This will render the image on the website.


export default function Contact() {
const [message, setMessage] = useState("");
const [showAlert, setShowAlert] = useState(false);


//to resets the form and hides an alert message after 3 seconds.
const resetForm = () => {
  const form = document.getElementById('auth-form');
  if (form) {
    form.reset();
  }

  setTimeout(() => {
      setShowAlert(false);
}, 3000);

};

useEffect(() => {
  if (showAlert) {
    resetForm();
  }
}, [showAlert]);

    return ( 
        <div className="customer-care">
        <Header />
        <body>
        <h2>Tongariro Cinemas Customer Care</h2>
        <p>How can we help  you today?</p>
        <p>If you have an inquiry or would like to share your experience with us, we're here to help. Please contact us using one of the following methods:</p>
        <h3>Email Us</h3>
        <p>For a booking enquiry, please enter your booking reference number in the Reference field.</p>
        <p>Your Contact Information</p>
        <form>
            <fieldset>
                <label>
                    <p>Name</p>
                    <input name="name" />
                    <p>Email</p>
                    <input name="email" />
                    <p>Mobile no:</p>
                    <input name="number" />
                    <h3>Your Message</h3>
                    <p>Subject</p>
                    <input name="subject" />
                    <p>Message</p>
                    <textarea >Leave your message</textarea>
                </label>
                <br/>
             <br/>
          
            <button type="submit" onClick={()=>setMessage("Successfully Submitted!")}>Submit</button>
            <p className="contact-message">{message}</p> 
            </fieldset>
      </form>
        <h3>Call Us</h3>
        <p>We'd love to hear from you. Please call us on 600 000000</p>
        <p>Our customer support team is available between 10:00 AM - 05:00 PM - 5 days a week.</p>
        <h3>Say Hello On Our Social Platforms</h3>
        <p>Follow us!</p>
        <div className="logos">
        <img src={facebook}  alt="fb" />
        <img src={instagram}  alt="ig" />
        <img src={youtube}  alt="youtube" />
        </div>
        <p>Keep in touch with us!!!</p>

        </body>
        <Footer />
        </div>   
        
    );
}