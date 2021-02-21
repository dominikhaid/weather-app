import React from 'react';
import AppIcon from 'src/components/AppIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedIcon(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main">
          <AppIcon {...props} />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Backgrounds',
  component: WarppedIcon,
};

storiesOf('Backgrounds', module).add(
  'App Overlay Icons',
  withPropsCombinations(
    WarppedIcon,
    {
      class: ['light', 'dark'],
      icon: ['home', 'search', 'weather', 'credits', 'limit', 'settings'],
    },
    {
      showSource: true,
    },
  ),
);
