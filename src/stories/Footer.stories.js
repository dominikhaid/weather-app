import React from 'react';
import Footer from 'src/components/Footer';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  width: '100vw',
  textAlign: 'center',
  height: ' 50px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignContent: 'center',
};

function WarppedFooter(props) {
  return (
    <div className={`${props.class}`}>
      <div className="bg-secondary-lightest dark:bg-gray-darkest text-secondary-darkest text-cetner">
        <div style={{...lastStyle}}>
          <Footer {...props} />
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Container',
  component: WarppedFooter,
};

storiesOf('Container', module).add(
  'Footer',
  withPropsCombinations(
    WarppedFooter,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
    },
  ),
);
