import React from 'react';
import creator from './Images/creator.jpg';
import Iframe from './Iframe';
import dumbmoney from './Images/dumbmoney.jpg'
import trolls from './Images/trolls.jpg';
import barbie from './Images/barbie.jpg';
import quantumania from './Images/quantumania.jpg';
import hunger from './Images/hunger.jpg';
import './Moviepics.css';

function Moviepics() {
  return (
    <div className="movie-gallery">
    <h2>A perfect place to watch the movie. Book your ticket now!</h2>
    <table className="movie-list">  
     <tr className="pics">
      <th><img src={creator}  alt="mario" />
      <img src={trolls}  alt="mario" />
      <img src={dumbmoney}  alt="mario" />
      </th><br/>
      </tr>

      <tr>
      <th><Iframe /></th><br/>
      </tr>

      <tr className="home-gallery">
      <th><img src={quantumania}  alt="mario" />
      <img src={barbie}  alt="mario" />
      <img src={hunger}  alt="mario" />
      </th>
       
       </tr>
   </table>
   
   </div>
  )
}

export default Moviepics