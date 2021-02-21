import React from 'react';
import AppOverlay from 'src/components/AppOverlay';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

function WarppedAppOverlay(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={innerStyle} id="main">
          <AppOverlay
            {...props}
            data={Object.values(appState.citys)}
            header={'Auswahl'}
            active={0}
            state={true}
          />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedAppOverlay,
};

storiesOf('Elements', module).add(
  'City Selector',
  withPropsCombinations(
    WarppedAppOverlay,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
