import React from 'react';
import Home from 'src/pages/home';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';
import AppIcon from 'components/AppIcon';

appState.activeCity.weatherView = 'home';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {};

function WarppedHome(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main" className="transform skew-y-1 pt-lg">
          <AppIcon icon="home">
            <Home {...props} {...appState} />
          </AppIcon>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/Home',
  component: WarppedHome,
};

storiesOf('Pages', module).add(
  'Home',
  withPropsCombinations(
    WarppedHome,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
