import React from 'react';
import AppIcon from 'src/components/AppIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const mainStyle = {
  display: 'block',
  float: 'left',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};

const innerStyle = {
  width: '100%',
  height: 'calc(100% - 80px)',
};

const lastStyle = {
  height: '100%',
  padding: '2rem',
};

function WarppedIcon(props) {
  return (
    <div style={{...innerStyle}} className={props.class}>
      <AppIcon {...props} />
    </div>
  );
}

export default {
  title: 'Backgrounds',
  component: WarppedIcon,
};

storiesOf('Backgrounds', module).add(
  'App',
  withPropsCombinations(
    WarppedIcon,
    {
      class: ['light', 'dark'],
      icon: ['home', 'search', 'weather', 'credits', 'limit', 'settings'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
