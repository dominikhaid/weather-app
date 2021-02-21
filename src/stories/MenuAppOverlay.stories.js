import React from 'react';
import MenuAppOverlay from 'components/MenuAppOverlay';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

function WarppedMenuAppOverlay(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu">
          <MenuAppOverlay
            updateCitys={appState.updateCitys}
            setAppState={appState.setAppState}
            activeCity={appState.activeCity}
            getActivecity={appState.getActivecity}
            citys={appState.citys}
            setSubMenu={() => {}}
            state={{active: true, menu: 'weather'}}
            getCityByName={appState.getCityByName}
          />
        </nav>
        <main id="main"></main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedMenuAppOverlay,
};

storiesOf('Elements', module).add(
  'Menu Weather Switcher',
  withPropsCombinations(
    WarppedMenuAppOverlay,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
