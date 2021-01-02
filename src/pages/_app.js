import React from 'react';
import App from 'next/app';
import '../../public/css/global.css';
import '../../public/css/weather-icons-core.css';
import Nav from '../components/Nav';
import RequestCount from '../components/RequestCount';
import FooterContainer from '../components/Footer';
import {AppProvider, AppContext} from '../context/AppState';
import Background from '../components/Background';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

class MainApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <AppProvider>
        <AppContext.Consumer>
          {appState => {
            return (
              <React.Fragment>
                <RequestCount {...appState} />
                <Component {...appState} />
                <Nav {...appState} />
                <FooterContainer />
                {process.browser &&
                window.location.pathname !== '/app/weather-app/tailwind' ? (
                  <Background />
                ) : (
                  ''
                )}
              </React.Fragment>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
export default MainApp;
