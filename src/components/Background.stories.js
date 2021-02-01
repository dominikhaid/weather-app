import React from 'react';
import Background from './Background';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedBg(props) {
  return (
    <div
      style={{
        height: '35vh',
        maxHeight: '900px',
        width: '100vw',
        margin: 'auto',
        position: 'relative',
      }}
      className={props.class}
    >
      <Background {...props} />
    </div>
  );
}

export default {
  title: 'Backgrounds',
  component: WarppedBg,
};

storiesOf('Backgrounds', module).add(
  'Html',
  withPropsCombinations(
    WarppedBg,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: {
        width: 'calc(100vw - 2rem)',
        overflow: 'hidden',
      },
    },
  ),
);
