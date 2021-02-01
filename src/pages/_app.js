import React from 'react';
import App from 'next/app';
import 'public/css/global.css';
import 'public/css/weather-icons-core.css';
import Nav from 'components/Nav';
import RequestData from 'lib/requests';
import {AppProvider, AppContext} from 'context/AppState';
import Background from 'components/Background';
import AppIcon from 'components/AppIcon';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

// TODO WEATHER VIEW TOP MENU DROPDOWN OTIONS VIEW TOGGLER EXPAND
// TODO STYLE RESULT BOX
// TODO CHECK MAIN NAV STATES
// TODO SCROLLER FOR FIVEDAY
// TODO RESPONSIVE CHECK
// TODO API CHECK

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
                <main id="main" className="transform skew-y-1 pt-lg">
                  <Nav {...appState} weather={appState.citys} />
                  <AppIcon>
                    <Component {...appState} />
                    <RequestData {...appState} />
                  </AppIcon>
                </main>
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
