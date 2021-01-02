import React from 'react';
import Cloud from '../../public/images/svg/cloud.svg';

function AppIcon(props) {
  return (
    <main
      id="main"
      className="transform skew-y-1 main-container bg-gradient-to-t from-secondary-light via-primary to-primary"
    >
      <Cloud
        className="animate-bounce"
        style={{
          fill: 'white',
          fillOpacity: '0.1',
          position: 'absolute',
          bottom: '-245px',
          left: '-173px',
          width: '145%',
        }}
      />
      <Cloud
        className="animate-wiggle"
        style={{
          fill: 'white',
          fillOpacity: '0.1',
          position: 'absolute',
          bottom: '-315px',
          left: '-150px',
          width: '145%',
        }}
      />
      <Cloud
        style={{
          fill: 'white',
          fillOpacity: '0.1',
          position: 'absolute',
          bottom: '-297px',
          left: '-92px',
          width: '126%',
        }}
      />
      <div className="transform -skew-y-1 w-100">{props.children}</div>
    </main>
  );
}

export default AppIcon;
