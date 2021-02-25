import React from 'react';
import App from 'next/app';
import 'public/css/global.css';
import 'public/css/weather-icons-core.css';
import Nav from 'components/Nav';
import RequestData from 'lib/requests';
import {AppProvider, AppContext} from 'context/AppState';
import Background from 'components/Background';
import AppIcon from 'components/AppIcon';
import {weatherSwitcherControls} from 'src/lib/utils';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

class MainApp extends App {
  constructor(props) {
    super(props);
    this.state = {theme: 'light'};
  }

  componentDidMount() {
    // NOTE THEME CONTROLL /LIGHT DARK
    let newTheme = false;
    if (process.browser) {
      if ('theme' in localStorage && this.state.theme !== localStorage.theme) {
        newTheme = localStorage.theme;
      } else if (
        !this.state.theme &&
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        newTheme = 'dark';
      } else if (
        !this.state.theme &&
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      ) {
        newTheme = 'light';
      }

      if (this.state.theme !== 'light') {
        document.querySelector('html').classList.remove('light');
        this.setState({theme: 'light'});
      }
      if (this.state.theme !== 'dark') {
        document.querySelector('html').classList.remove('dark');
        this.setState({theme: 'dark'});
      }
      document.querySelector('html').classList.add(newTheme);
    }

    // NOTE WeatherView Control Element
    const container = document.getElementById('app-main-container');
    const control_top_weather_switch = container => {
      window.addEventListener('scroll', function (e) {
        weatherSwitcherControls();
      });
    };

    //NOTE MOBILE
    if (container && window.innerWidth < 767) {
      control_top_weather_switch(container);
    }

    return () => {
      if (container && window.innerWidth < 767) {
        window.removeEventListener('scroll', control_top_weather_switch);
      }
    };
  }

  render() {
    const {Component} = this.props;

    if (
      process.browser &&
      window.location.pathname === '/app/weather-app/tailwind'
    ) {
      return (
        <>
          <Component />
        </>
      );
    }
    return (
      <AppProvider>
        <AppContext.Consumer>
          {appState => {
            return (
              <React.Fragment>
                <Nav {...appState} weather={appState.citys} />
                <main id="main" className="transform skew-y-1 pt-lg">
                  <AppIcon>
                    <Component {...appState} />
                    <RequestData {...appState} />
                  </AppIcon>
                </main>
                <Background />
              </React.Fragment>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
export default MainApp;
