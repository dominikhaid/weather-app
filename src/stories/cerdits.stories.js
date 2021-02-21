import React from 'react';
import Credits from 'src/pages/credits';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from './data-mockup';
import AppIcon from 'components/AppIcon';

function Warppedcredits(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main" className="transform skew-y-1 pt-lg">
          <AppIcon icon="credits">
            <Credits {...props} {...appState} />
          </AppIcon>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/credits',
  component: Warppedcredits,
};

storiesOf('Pages', module).add(
  'Credits',
  withPropsCombinations(
    Warppedcredits,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
