import React from 'react';
import Citylist from './Citylist';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from '../stories/data-mockup';

function WarppedCitylist(props) {
  console.log(appState);
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
  'Select List',
  withPropsCombinations(
    WarppedCitylist,
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
