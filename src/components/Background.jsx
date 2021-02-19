import React from 'react';
import Footer from './Footer';

function Background() {
  return (
    <footer style={{height: '100%', zIndex: '-1'}} id="background">
      <Footer />
    </footer>
  );
}

export default Background;
