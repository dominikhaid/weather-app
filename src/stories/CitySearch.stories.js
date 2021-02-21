import React from 'react';
import CitySearch from 'src/components/CitySearch';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

function WarppedCitySearch(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={innerStyle} id="main">
          <CitySearch
            {...props}
            citys={appState.citys}
            searchRadio="current"
            updateCitys={appState.updateCitys}
            debug={appState.debug}
            updateRequestState={appState.updateRequestState}
          />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedCitySearch,
};

storiesOf('Elements', module).add(
  'City Search',
  withPropsCombinations(
    WarppedCitySearch,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
