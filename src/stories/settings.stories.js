import React from 'react';
import Settings from 'src/pages/settings';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';
import AppIcon from 'components/AppIcon';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {};

function Warppedsearch(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu" className="transform skew-y-1 pt-lg"></nav>
        <main id="main">
          <AppIcon icon="settings">
            <Settings {...props} {...appState} />
          </AppIcon>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/search',
  component: Warppedsearch,
};

storiesOf('Pages', module).add(
  'Settings',
  withPropsCombinations(
    Warppedsearch,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
