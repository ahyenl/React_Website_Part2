import './Aboutus.css'; // Imports the Content component from the ./Aboutus.css file
import Header from './Header'; // Imports the Header component from the ./Header.js file
import Footer from './Footer'; // Imports the Header component from the ./Footer.js file


export default function Aboutus(){    // This line defines a React component named Aboutus and exports it as the default component of the module.
    return ( 
            //    This line creates a <div> element with the class name about. This element serves as the container for the entire About Us page content.
        <div className="about">    
        <Header />     {/* This line renders the Header component, which likely generates the website's header section. */}      
        <body>   {/* This line creates a body element, which holds the main content of the About Us page. */}
        <h2>About Us</h2>
        <p>Tongariro Cinema is your premier destination for cinematic experiences. We offer a wide selection of the latest blockbuster films, independent gems, and family-friendly favorites, all projected on our state-of-the-art screens with crystal-clear sound.</p>
        <h3>Immerse Yourself in the Magic of Movies</h3>     
        <p>At Tongariro Cinema, we believe that movies have the power to transport you to different worlds, evoke emotions, and spark imaginations. That's why we've created an environment that's both comfortable and immersive, where you can fully immerse yourself in the magic of cinema.</p>
        <h3>Our Commitment to Quality</h3>     
        <p>We're committed to providing our guests with an exceptional movie-going experience. That's why we offer:</p>
        <p>- Plush, comfortable seating with plenty of legroom</p>
        <p>- A variety of concession options, including popcorn, candy, and drinks</p>
        <p>- Friendly and attentive staff who are always happy to help</p>
        <h3>Upcoming Events</h3>     
        <p>In addition to our regular movie screenings, we also host a variety of special events throughout the year, such as:</p>
        <p>- Film premieres</p>
        <p>- Movie marathons</p>
        <p>- Themed screenings</p>
        <h3>Plan Your Next Movie Night</h3>     
        <p>Whether you're a seasoned moviegoer or a casual film fan, we invite you to experience the magic of Tongariro Cinema. Visit our website or call us today to book your tickets for your next movie night!</p>

        </body>
        <Footer />           {/* This line renders the Footer component, which likely generates the website's footer section. */}
        </div>   
        
    );
}