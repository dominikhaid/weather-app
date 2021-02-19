import React from 'react';
import Weather from 'src/pages/weather/index';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';
import AppIcon from 'components/AppIcon';

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

const lastStyle = {};

function WarppedWeather(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppIcon icon="weather">
          <Weather {...props} {...appState} />
        </AppIcon>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/Weather',
  component: WarppedWeather,
};

storiesOf('Pages', module).add(
  'Weather',
  withPropsCombinations(
    WarppedWeather,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
