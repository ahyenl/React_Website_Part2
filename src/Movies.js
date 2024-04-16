import React from 'react'
import './Movies.css';
import Header from './Header';
import Footer from './Footer';
import mario from "./Images/mario.jpg";
import creator from "./Images/creator.jpg";
import dumbmoney from "./Images/dumbmoney.jpg"
import quantumania from "./Images/quantumania.jpg";
import { Link } from "react-router-dom";  // imports the Link component from the react-router-dom package


export default function Movies() {
  return (
    <div className="movielist">
        <Header />
        <body>
        <h2> Movie List </h2>
        <div className="gallery">

            <div className="col1">
                <div className="mario-table">
            <div className="desct">The Super Mario Bros.</div>
                <img src={mario}  alt="mario" />
            <div className="desg">2023 |  PG | 1h 32m</div>
            <div className="desg">Animation  | Comedy  |  Adventure</div>
            <a id="trailer" href="https://www.youtube.com/embed/6Cf__f7Jp6s?si=apj1sl3nPrLfA81O">Watch the Trailer</a>
            <Link to="/showtimes" id="showtimes">View Showtimes</Link>

             </div>

              <div className="creator-table">
            <div className="desct">The Creator</div>
                <img src={creator}  alt="creator" />
                <div className="desg">2023 |  PG - 13 | 2h 13m</div>
                <div className="desg">Action  | Drama  |  Adventure</div>
                <a id="trailer" href="https://www.youtube.com/embed/ex3C1-5Dhb8?si=Ak4tsETuzP5z17u8">Watch the Trailer</a>
            <Link to="/showtimes" id="showtimes">View Showtimes</Link>
            </div>
            </div>

            <div className="col2">
                <div className="dmoney-table">
            <div className="desct">Dumb Money</div>
                <img src={dumbmoney}  alt="dumbmoney" />
            <div className="desg">2023 |  R | 1h 45m</div>
            <div className="desg">Comedy  | Drama  |  Biography</div>
            <a id="trailer" href="https://www.youtube.com/embed/bmr8YmwnZ3w?si=mZ1B86CE3BSm76Dl">Watch the Trailer</a>
            <Link to="/showtimes" id="showtimes">View Showtimes</Link>
            </div>

                <div className="quan-table">
            <div className="desct"> Ant-Man and the Wasp: Quantumania</div>
                <img src={quantumania}  alt="quantumania" />
                <div className="desg">2023 | PG-13 | 2h 4m</div>
                <div className="desg">Action  | Comedy  |  Adventure</div>
                <a id="trailer" href="https://www.youtube.com/embed/ZlNFpri-Y40?si=0gcWFOjrZjtncuSL">Watch the Trailer</a>
            <Link to="/showtimes" id="showtimes">View Showtimes</Link>
            </div>
            </div>

        </div>
   
    </body>
    <Footer />
    </div>
  );
}

