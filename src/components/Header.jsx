import React from 'react';
import {Container, Header, Button, Segment} from 'semantic-ui-react';
import NavContainer from '@/components/Nav';

export default function HeaderContainer(appStates) {
  // if (!process.browser) {
  //   //console.debug('Home SERVER');
  // } else {
  //   console.debug('Header CLIENT', appStates);
  // }

  return (
    <React.Fragment>
      <NavContainer {...appStates} />
      <div id="header-submenue-grid" className="" />
    </React.Fragment>
  );
}
