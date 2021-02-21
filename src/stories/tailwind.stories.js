import React from 'react';
import Tailwind from 'src/pages/tailwind';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function Warppedtailwind(props) {
  return (
    <div className={`no-css`}>
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
    },
  ),
);
