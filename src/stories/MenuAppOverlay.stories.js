import React from 'react';
import MenuAppOverlay from 'src/stories/MenuAppOverlay.stories';
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

function WarppedMenuAppOverlay(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <MenuAppOverlay
          {...props}
          updateCitys={appState.updateCitys}
          setAppState={appState.setAppState}
          activeCity={appState.activeCity}
          getActivecity={appState.getActivecity}
          citys={appState.citys}
          setSubMenu={() => {}}
          state={{active: true, menu: 'weather'}}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedMenuAppOverlay,
};

storiesOf('Elements', module).add(
  'MenuAppOverlay',
  withPropsCombinations(
    WarppedMenuAppOverlay,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
