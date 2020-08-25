import React from 'react';
import {Header, Container, Icon, Divider, Segment} from 'semantic-ui-react';

export default function DatabaseError(props) {
  return (
    <>
      <Container
        className="margin flex-con flex-center fluid"
        style={{minHeight: '50%'}}
      >
        <Container className="flex-con flex-center" style={{minHeight: '50%'}}>
          <Segment
            className="flex-con flex-center"
            style={{maxWidth: '750px', paddingTop: '4rem'}}
          >
            <div className="flex-item-4">
              <Icon.Group
                size="massive"
                style={{
                  borderRadius: '999px',
                  width: '165px',
                  height: '165px',
                  paddingTop: '1rem',
                }}
              >
                <Icon name="user secret" style={{paddingLeft: '26px'}} />
                <Icon
                  corner="bottom right"
                  name="times circle"
                  style={{
                    borderRadius: '999px',
                    padding: '2rem',
                    paddingTop: '0.2rem',
                    height: '65px',
                    width: '65px',
                    paddingLeft: '0.2rem',
                    backgroundColor: 'white',
                  }}
                />
              </Icon.Group>
              <Header
                id="blogDes"
                as="h1"
                className={'text-center gluid margin-top'}
              >
                505
              </Header>
            </div>
            <p
              className="flex-item-4 margin-top border padding text-center margin-bottom"
              style={{maxWidth: '450px'}}
            >
              Bei der Verbindung zur Website ist ein Fehler aufgetretten, bitte
              versuche es später erneut oder wende dich an den Administrator.
            </p>
          </Segment>
        </Container>
      </Container>
    </>
  );
}
