import React from 'react';
import FooterContainer from './Footer';

function Background() {
  return (
    <div style={{height: '100%', zIndex: '-1'}} id="background">
      <FooterContainer />
    </div>
  );
}

export default Background;
