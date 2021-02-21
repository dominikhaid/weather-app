import React from 'react';
import DynamicIcon from 'src/components/DynamicIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Check from 'public/images/svg/check-circle.svg';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  maxHeight: '45px',
};

function WarppedIcon(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={innerStyle} id="main">
          <DynamicIcon
            {...props}
            active={true}
            style={{
              fill: 'white',
              fillOpacity: '0.05',
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedIcon,
};

storiesOf('Elements', module).add(
  'Animated Icons',
  withPropsCombinations(
    WarppedIcon,
    {
      class: ['light', 'dark'],
      Icon: [Check],
      animation: ['animate-up'],
    },
    {
      showSource: true,
    },
  ),
);
