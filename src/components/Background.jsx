import React from 'react';
import Image from 'next/image';

function Background() {
  return (
    <div id="background">
      <Image src={`/app/weather-app/images/sky.webp`} layout={'fill'} />
    </div>
  );
}

export default Background;
