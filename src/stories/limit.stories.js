import React from 'react';
import Limit from 'src/pages/limit';
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
};nst innerStyle = {
  width: '100%',
  height: 'calc(100% - 80px)',
  position: 'relative',
  overflow: 'hidden',
};
const lastStyle = {};

function Warppedlimit(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppIcon icon="limit">
          <Limit {...props} {...appState} />
        </AppIcon>
      </div>
    </div>
  );
}

export default {
  title: 'Pages/limit',
  component: Warppedlimit,
};

storiesOf('Pages', module).add(
  'Limit',
  withPropsCombinations(
    Warppedlimit,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
