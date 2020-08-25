import React, {useEffect} from 'react';
import {Header, Icon} from 'semantic-ui-react';
import MainContainer from '@/components/MainContainer';

export default function Info(weatherStates) {
  if (!process.browser) {
    //console.debug('Home SERVER');
  } else {
    console.debug('Info CLIENT', weatherStates);
  }

  useEffect(() => {
    if (weatherStates.activePageState !== '/info')
      weatherStates.setAppState({
        activePageState: '/info',
      });
    return () => {};
  }, []);
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
              <Header.Content>Info</Header.Content>
            </Header>
            <Header as="h2" icon textAlign="center">
              <Icon name="info" circular />
            </Header>

            <p style={{marginBottom: '0px', paddingBottom: '0px'}}>
              Demo App erstellt mit&nbsp;
              <a href="https://nextjs.org/" traget="blank">
                Next.js
              </a>
              &nbsp; erstellt.
              <br /> Als Api verwendet Weather-App die &nbsp;
              <a href="https://developer.accuweather.com/" traget="blank">
                AccuWeather
              </a>
              .<br />
              Die Anzahl der Suche Anfragen ist pro Benutzer ist auf 5
              beschränkt.
              <br />
              Die Icons stammen von&nbsp;
              <a
                href="https://erikflowers.github.io/weather-icons/"
                traget="blank"
              >
                erikflowers
              </a>
            </p>
          </div>
        </div>
      </MainContainer>
    </React.Fragment>
  );
}
