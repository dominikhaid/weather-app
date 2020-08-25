import React from 'react';
import Info from './info';

export default function Index(weatherStates) {
  if (!process.browser) {
    //console.debug('Home SERVER');
  } else {
    console.debug('Index CLIENT', weatherStates);
  }

  return (
    <React.Fragment>
      <Info {...weatherStates} />
    </React.Fragment>
  );
}
