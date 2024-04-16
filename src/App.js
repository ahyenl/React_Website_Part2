import Content from './Content'; // Imports the Content component from the ./Content.js file
import Header from './Header'; // Imports the Header component from the ./Header.js file
import Footer from './Footer'; // Imports the Footer component from the ./Footer.js file


export default function App() {    // Defines the App function as the default export
  return (
    // Creates a div element with the class name "App" 
    <div className="App">  
    {/* Renders the Header component  */}
        <Header />   
    {/* Renders the Content component        */}
        <Content />   
    {/* Renders the Footer component      */}
        <Footer />       
    </div>
  );
}


