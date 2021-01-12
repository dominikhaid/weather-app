import React from 'react';
import App from 'next/app';
import '@/public/css/global.css';
import '@/public/css/weather-icons-core.css';
import Nav from '@/components/Nav';
import RequestData from '@/lib/requests';
import {AppProvider, AppContext} from '@/context/AppState';
import Background from '@/components/Background';
import AppIcon from '@/components/AppIcon';
import WeatherNav from '@/components/WeatherNav';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

/**
 *
 * TODO WEATHER NAV DISPLAY AS SECOND BARD
 */

//TODO RESPONSIVE CHECK
//TODO TEST API

/**
 * TODO FOUR THE 5 DAY VIEW MAK A DAY SELCTOR ?
 * SIDE SCROLL ONCLICK  LIKE A SLIDER
 */

class MainApp extends App {
  render() {
    const {Component} = this.props;

    if (
      process.browser &&
      window.location.pathname === '/app/weather-app/tailwind'
    )
      return <Component />;

    return (
      <AppProvider>
        <AppContext.Consumer>
          {appState => {
            return (
              <React.Fragment>
                <WeatherNav {...appState} />
                <AppIcon>
                  <Component {...appState} />
                  <Nav {...appState} />
                  <RequestData {...appState} />
                </AppIcon>
                <Background />)
              </React.Fragment>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
export default MainApp;
