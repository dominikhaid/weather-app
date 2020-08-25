import React, {useEffect} from 'react';
import {Container, Menu, Icon} from 'semantic-ui-react';
import Link from 'next/link';

export default function NavContainer(appStates) {
  // if (!process.browser) {
  //   //console.debug('Home SERVER');
  // } else {
  //   console.debug('Nav CLIENT', appStates);
  // }

  useEffect(() => {
    appStates.setAppState({activePageState: window.location.pathname});
    return () => {};
  }, [appStates.activePageState]);

  const handleItemClick = e => {
    appStates.setAppState({activePageState: window.location.pathname});
  };

  return (
    <React.Fragment>
      <div id="header-toolbar-grid" className="material-grid  dimmable"></div>
      <nav id="main-menue">
        <Container>
          <Menu icon="labeled">
            <Menu.Item
              name="/info"
              active={appStates.activePageState === '/info'}
              onClick={e => {
                handleItemClick(e.target.name);
              }}
            >
              <Link href="/info">
                <div>
                  <Icon name="info" />
                  Info
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item
              name="/search"
              active={appStates.activePageState === '/search'}
              onClick={e => {
                handleItemClick(e.target.name);
              }}
            >
              <Link href="/search">
                <div>
                  <Icon name="search" />
                  Search
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item
              disabled={appStates.citysState.length > 0 ? false : true}
              name="/weather"
              active={appStates.activePageState === '/weather'}
              onClick={e => {
                appStates.searchState
                  ? handleItemClick(e.target.name)
                  : e.preventDefault();
              }}
            >
              <Link href="/weather">
                <div>
                  <i className="wi wi-day-cloudy icon" />
                  Weather
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Container>
      </nav>
    </React.Fragment>
  );
}
