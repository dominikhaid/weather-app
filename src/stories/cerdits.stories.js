import React from 'react';
import Credits from 'src/pages/credits';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from './data-mockup';
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

function Warppedcredits(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppIcon icon="credits">
          <Credits {...props} {...appState} />
        </AppIcon>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/credits',
  component: Warppedcredits,
};

storiesOf('Pages', module).add(
  'Credits',
  withPropsCombinations(
    Warppedcredits,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
