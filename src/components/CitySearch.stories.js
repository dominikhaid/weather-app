import React from 'react';
import CitySearch from './CitySearch';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from '../stories/data-mockup';

function WarppedCitySearch(props) {
  return (
    <div
      style={{
        height: '35vh',
        maxHeight: '300px',
        width: '100%',
        marign: 'auto',
        position: 'relative',
      }}
      className={`${props.class}`}
    >
      <div
        style={{
          padding: '1rem',
        }}
        className={`main-bg`}
      >
        <CitySearch
          {...props}
          citys={appState.citys}
          searchRadio="current"
          updateCitys={appState.updateCitys}
          debug={appState.debug}
          updateRequestState={appState.updateRequestState}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedCitySearch,
};

storiesOf('Elements', module).add(
  'Search Field',
  withPropsCombinations(
    WarppedCitySearch,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: {
        width: 'calc(100vw - 2rem)',
        overflow: 'hidden',
      },
    },
  ),
);
