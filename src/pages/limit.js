import React, {useEffect} from 'react';
import {Header, Icon} from 'semantic-ui-react';
import MainContainer from '@/components/MainContainer';
import {useRouter} from 'next/router';

export default function Limit(weatherStates) {
  if (!process.browser) {
    //console.debug('Home SERVER');
  } else {
    console.debug('Limit CLIENT', weatherStates);
  }

  return (
    <React.Fragment>
      <MainContainer id={'info'}>
        <div
          className="weatherBoxDay"
          style={{
            maxWidth: '500px',
            textAlign: 'center',
            margin: '2rem 1rem 1rem 1rem',
          }}
        >
          <div className="general" style={{margin: '1rem'}}>
            <Header as="h4" icon textAlign="left">
              <Header.Content>Fehler</Header.Content>
            </Header>
            <Header as="h2" icon textAlign="center">
              <Icon name="warning" circular />
            </Header>

            <p style={{marginBottom: '0px', paddingBottom: '0px'}}>
              Leider müsssen wir bei diesser Demo ein Limit für Requests auf die
              Accuweather API setzten. Das heutige Limit für Suchanfragen wurde
              erreicht.
            </p>
          </div>
        </div>
      </MainContainer>
    </React.Fragment>
  );
}
