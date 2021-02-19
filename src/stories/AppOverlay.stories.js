import React from 'react';
import AppOverlay from 'src/components/AppOverlay';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from 'src/stories/data-mockup';

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
  overflow: 'hidden',
  position: 'relative',
};

function WarppedAppOverlay(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppOverlay
          {...props}
          data={Object.values(appState.citys)}
          header={'Auswahl'}
          active={0}
          state={true}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedAppOverlay,
};

storiesOf('Elements', module).add(
  'AppOverlay',
  withPropsCombinations(
    WarppedAppOverlay,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
