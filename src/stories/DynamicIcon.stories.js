import React from 'react';
import DynamicIcon from 'src/components/DynamicIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Check from 'public/images/svg/check-circle.svg';

const mainStyle = {
  display: 'block',
  float: 'left',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};
const innerStyle = {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const lastStyle = {
  height: '100%',
  padding: '2rem',
};

function WarppedIcon(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <DynamicIcon
          {...props}
          active={true}
          style={{
            fill: 'white',
            fillOpacity: '0.05',
          }}
        />
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
      style: mainStyle,
    },
  ),
);
