import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import ConfirmButtons from 'src/components/ConfirmButtons';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  maxHeight: '45px',
};

function WarppedConfirmButtons(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={innerStyle} id="main">
          <div style={lastStyle}>
            <ConfirmButtons {...props} ok={'Confirm'} cancel={'Abort'} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedConfirmButtons,
};

storiesOf('Elements', module).add(
  'Confirm Buttons',
  withPropsCombinations(
    WarppedConfirmButtons,
    {
      class: ['light', 'dark'],
      disabled: [true, false],
    },
    {
      showSource: true,
    },
  ),
);
