import React from 'react';
import Nav from 'src/components/Nav';
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
  height: 'calc(100% - 80px)',
  position: 'relative',
};

const lastStyle = {
  height: '100%',
  position: 'relative',
  top: '0',
  left: 'calc(50vw + 80px)',
};

function WarppedNav(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}}>
        <Nav
          {...props}
          weather={true}
          citys={appState.citys}
          updateCitys={appState.updateCitys}
          getActivecity={appState.getActivecity}
          setAppState={appState.setAppState}
          activeCity={appState.activeCity}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Containers',
  component: WarppedNav,
};

storiesOf('Elements', module).add(
  'Main Nav',
  withPropsCombinations(
    WarppedNav,
    {
      class: ['light no-css', 'dark no-css'],
      limit: [9, 0],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
