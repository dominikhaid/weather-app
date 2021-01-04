import React from 'react';
import Image from 'next/image';

function Background() {
  return (
    <div id="background">
      <Image src={`/app/weather-app/images/bg2.jpg`} layout={'fill'} />
    </div>
  );
}

export default Background;
