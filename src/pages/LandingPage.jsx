import React from 'react';
import landinggif from '../assets/landing-gif.gif'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="text">
          <h1>Welcome to Our Chat App</h1>
          <p>
            Discover the best way to communicate with your friends and family using our Chat App. Connect with ease and stay in touch.
          </p>
          <Link className='button-text' to="/room" >Get Started</Link>
        </div>
        <div className="image">
          <img src={landinggif} alt="App Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
