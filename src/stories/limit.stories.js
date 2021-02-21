import React from 'react';
import Limit from 'src/pages/limit';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';
import AppIcon from 'components/AppIcon';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {};

function Warppedlimit(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main" className="transform skew-y-1 pt-lg">
          <AppIcon icon="limit">
            <Limit {...props} {...appState} />
          </AppIcon>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/limit',
  component: Warppedlimit,
};

storiesOf('Pages', module).add(
  'Limit',
  withPropsCombinations(
    Warppedlimit,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
