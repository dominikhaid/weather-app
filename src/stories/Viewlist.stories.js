import React from 'react';
import Viewlist from 'src/components/Viewlist';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from '../stories/data-mockup';

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

function WarppedViewlist(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <Viewlist
          {...props}
          setAppState={appState.setAppState}
          activeCity={appState.activeCity}
          getActivecity={appState.getActivecity}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedViewlist,
};

storiesOf('Elements', module).add(
  'Viewlist',
  withPropsCombinations(
    WarppedViewlist,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
