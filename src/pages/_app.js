import React from 'react';
import App from 'next/app';
import '../../public/css/global.css';
import '../../public/css/weather-icons-core.css';
import Nav from '../components/Nav';
import RequestCount from '../components/RequestCount';
import FooterContainer from '../components/Footer';
import {AppProvider, AppContext} from '../context/AppState';
import Background from '../components/Background';
import AppIcon from '../components/AppIcon';

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
            if (process.browser) {
              document.querySelector('html').classList.add(appState.theme);
            }
            return (
              <React.Fragment>
                <AppIcon>
                  <RequestCount {...appState} />
                  <Component {...appState} />
                  <Nav {...appState} />
                  <FooterContainer />
                </AppIcon>
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
