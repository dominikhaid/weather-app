import React from 'react';
import Background from 'src/components/Background';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const mainStyle = {
  display: 'block',
  float: 'left',
  maxWidth: '100vw',
  width: '100%',
  height: '50vh',
  overflow: 'hidden',
};

const innerStyle = {
  width: '100%',
  position: 'relative',
  height: '90%',
  maxHeight: '900px',
};

function WarppedBg(props) {
  return (
    <div style={{...innerStyle}} className={props.class}>
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
      style: mainStyle,
    },
  ),
);
