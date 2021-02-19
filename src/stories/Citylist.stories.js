import React from 'react';
import Citylist from 'src/components/Citylist';
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

function WarppedCitylist(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <Citylist
          citys={appState.citys}
          activeCity={appState.activeCity}
          setAppState={appState.setAppState}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedCitylist,
};

storiesOf('Elements', module).add(
  'Citylist',
  withPropsCombinations(
    WarppedCitylist,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
