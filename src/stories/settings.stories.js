import React from 'react';
import Settings from 'src/pages/settings';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';
import AppIcon from 'components/AppIcon';

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
const lastStyle = {};

function Warppedsearch(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppIcon icon="settings">
          <Settings {...props} {...appState} />
        </AppIcon>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/search',
  component: Warppedsearch,
};

storiesOf('Pages', module).add(
  'Settings',
  withPropsCombinations(
    Warppedsearch,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
