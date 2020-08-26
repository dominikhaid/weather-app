import React, {useState} from 'react';
import {Icon} from 'semantic-ui-react';
import MainContainer from '@/components/MainContainer';
import {useRouter} from 'next/router';

export default function RequestCount(appStates) {
  const router = useRouter();

  if (process.env.NEXT_PUBLIC_DEBUG === 'false') {
    console.debug = () => {
      return;
    };
  }

  if (!process.browser) {
    //console.debug('Home SERVER');
  } else {
    if (appStates.requestState <= -1 && process.browser) {
      let limitDate = new Date();
      limitDate = limitDate
        .toGMTString(limitDate)
        .replace(/(\d\d:\d\d:\d\d.*)/, '');

      window.localStorage.setItem('limit', limitDate);
    }

    let limit = window.localStorage.getItem('limit');
    let test = new Date();
    test = test.toGMTString(test).replace(/(\d\d:\d\d:\d\d.*)/, '');

    if (
      limit === test &&
      window.location.pathname !== '/app/weather-app/limit' &&
      window.location.pathname !== '/app/weather-app/demo'
    )
      router.push('/limit');
  }

  return (
    <React.Fragment>
      <MainContainer id={'requestCount'}>
        <div>
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: '0.5rem',
              left: '2rem',
            }}
          >
            <Icon
              style={{
                color:
                  appStates.requestState < 2
                    ? 'red'
                    : appStates.requestState < 4
                    ? 'orange'
                    : 'inerhit',
                marginRight: '10px',
              }}
              name="dna"
            />
            <p
              style={{
                color:
                  appStates.requestState <= 0
                    ? 'red'
                    : appStates.requestState <= 2
                    ? 'orange'
                    : 'inerhit',
                fontWeight: 'bold',
                margin: '-6px',
              }}
            >
              {appStates.requestState <= 0
                ? 'REQUEST LIMIT'
                : appStates.requestState}
            </p>
          </div>
          {/* <h1 id="title">WEAHTER-APP</h1> */}
        </div>
      </MainContainer>
    </React.Fragment>
  );
}
