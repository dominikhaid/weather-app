import React from 'react';
import Nav from 'src/components/Nav';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {};

function WarppedNav(props) {
  return (
    <div className={`${props.class}`}>
      <div className="bg-secondary-lightest dark:bg-gray-darkest">
        <div id="__next" className={`menu ${props.class}`}>
          <Nav
            {...props}
            weather={true}
            citys={appState.citys}
            getCityByName={appState.getCityByName}
            updateCitys={appState.updateCitys}
            getActivecity={appState.getActivecity}
            setAppState={appState.setAppState}
            activeCity={appState.activeCity}
          />
          <main id="main"></main>
        </div>{' '}
      </div>
    </div>
  );
}

export default {
  title: 'Containers',
  component: WarppedNav,
};

storiesOf('Elements', module).add(
  'Main Nav',
  withPropsCombinations(
    WarppedNav,
    {
      class: ['light no-css', 'dark no-css'],
      limit: [9, 0],
    },
    {
      showSource: true,
    },
  ),
);
