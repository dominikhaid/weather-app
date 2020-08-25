import React from 'react';
import {Container, Segment} from 'semantic-ui-react';

export default function MainWrapper(props) {
  return (
    <React.Fragment>
      <Container id={props.id}>
        <Segment style={{minHeight: '60px'}} className="mainSegment">
          {props.children}
        </Segment>
      </Container>
    </React.Fragment>
  );
}
