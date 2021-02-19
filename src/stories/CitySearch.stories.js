import React from 'react';
import CitySearch from 'src/components/CitySearch';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const mainStyle = {
  display: 'block',
  float: 'left',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};

const innerStyle = {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const lastStyle = {
  height: '100%',
  padding: '2rem',
};

function WarppedCitySearch(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
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
  'CitySearch',
  withPropsCombinations(
    WarppedCitySearch,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
