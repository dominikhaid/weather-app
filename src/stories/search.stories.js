import React from 'react';
import Search from 'src/pages/search';
import AppIcon from 'components/AppIcon';
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
const lastStyle = {};

function Warppedsearch(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <AppIcon icon="search">
          <Search {...props} {...appState} />
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
  'Search',
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
