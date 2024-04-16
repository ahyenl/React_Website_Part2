import React, { useState, useEffect } from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";


function Login() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    resetForm();
  };

  const handleLogInClick = () => {
    setShowSignUp(false);
    resetForm();
  };

  const validateEmail = (email) => {

    return true;
  };

  const validatePassword = (password) => {

    return true;
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Invalid password');
      return;
    }

    // Your signup or login 
    handleShowAlert();
    resetForm();
  };

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
    <div className="login">
      <Header />
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">{showSignUp ? 'Sign Up' : 'Log In'}</h1>
            <div className="auth-buttons">
              <button
                className={showSignUp ? 'auth-button active' : 'auth-button'}
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
              <button
                className={!showSignUp ? 'auth-button active' : 'auth-button'}
                onClick={handleLogInClick}
              >
                Log In
              </button>
            </div>
          </div>

          <div className="auth-form">
            {showSignUp ? (
              <form id="auth-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <span className="error" id="emailError">
                  {emailError}
                </span>

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <span className="error" id="passwordError">
                  {passwordError}
                </span>

                <button type="submit">Sign Up</button> <br/>
                {showAlert && <div className="alert">You have successfully registered !!</div>}
              </form>
            ) : (
              <form id="auth-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <span className="error" id="emailError">
                  {emailError}
                </span>

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <span className="error" id="passwordError">
                  {passwordError}
                </span>
                <br></br>
                <Link to="/profile" className="log">Log In</Link>

                {/* <button type="submit">Log In</button>
                {showAlert && (
                  <div className="alert">You have successfully logged-in !!</div>
                )} */}
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
