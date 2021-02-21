import React from 'react';
import Background from 'src/components/Background';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedBg(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main id="main">
          <Background {...props} />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Backgrounds',
  component: WarppedBg,
};

storiesOf('Backgrounds', module).add(
  'App',
  withPropsCombinations(
    WarppedBg,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
