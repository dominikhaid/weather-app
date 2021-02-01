import React from 'react';
import Footer from './Footer';

function Background() {
  return (
    <div style={{height: '100%', zIndex: '-1'}} id="background">
      <Footer />
    </div>
  );
}

export default Background;
