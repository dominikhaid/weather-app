import React from 'react';
import AppIcon from './AppIcon';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedIcon(props) {
  return (
    <div style={{width: '450px'}} className={props.class}>
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
      style: {
        display: 'block',
        float: 'left',
        margin: '1rem',
        // maxHeight: '500px',
        overflow: 'hidden',
      },
    },
  ),
);
