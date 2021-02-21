import React from 'react';
import Search from 'src/pages/search';
import AppIcon from 'components/AppIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {};

function Warppedsearch(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main" className="transform skew-y-1 pt-lg">
          <AppIcon icon="search">
            <Search {...props} {...appState} />
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
  'Search',
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
