import React from 'react';
import Tailwind from 'src/pages/tailwind';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const mainStyle = {
  display: 'block',
  float: 'left',
  margin: '1rem',
  maxWidth: 'calc(100vw - 2rem)',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};

const innerStyle = {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const lastStyle = {};

function Warppedtailwind(props) {
  return (
    <div style={{...innerStyle}} className={`no-css`}>
      <Tailwind {...props} />
    </div>
  );
}

export default {
  title: 'Pages/Tailwind',
  component: Warppedtailwind,
};

storiesOf('Pages', module).add(
  'Tailwind',
  withPropsCombinations(
    Warppedtailwind,
    {},
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
