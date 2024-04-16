import React from 'react';
import './Iframe.css'

const ResponsiveIframe = () => {
  return (
    <iframe
      className="youtube-trailer"
      src="https://www.youtube.com/embed/6Cf__f7Jp6s?si=apj1sl3nPrLfA81O"
      title="YouTube video player"

      
frameborder="0"

      
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

      
allowfullscreen

      
style={{

        
width: '80%',
        height: '450px',
      }}
    />
  );
};

export default ResponsiveIframe;