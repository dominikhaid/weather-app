import React from 'react';
import {Header, Container, Icon, Divider, Segment} from 'semantic-ui-react';
import Link from 'next/link';

export default function NotFoundPage(props) {
  return (
    <>
      <Container
        className="margin flex-con flex-center fluid"
        style={{minHeight: '50%'}}
      >
        <Container className="flex-con flex-center" style={{minHeight: '50%'}}>
          <Segment
            className="flex-con flex-center"
            style={{maxWidth: '750px', paddingTop: '3rem'}}
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
                404
              </Header>
            </div>
            <p
              className="flex-item-4 margin-top border padding text-center margin-bottom"
              style={{maxWidth: '450px'}}
            >
              Die gesuchte Seite wurde nicht gefunden, oder ist nicht mehr
              verfügbar.
              <Divider className="flex-item-4" />
              <p className="flex-item-4">
                <strong>
                  <Link href="/">
                    <a>Startseite</a>
                  </Link>
                </strong>
              </p>
            </p>
          </Segment>
        </Container>
      </Container>
    </>
  );
}
