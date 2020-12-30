import React from 'react';
import Info from './info';

export default function Index(weatherStates) {
  return (
    <React.Fragment>
      <Info {...weatherStates} />
    </React.Fragment>
  );
}
