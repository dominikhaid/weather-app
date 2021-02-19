import React from 'react';
import SelectionList from 'src/components/SelectionList';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import appState from '../stories/data-mockup';

const mainStyle = {
  display: 'block',
  float: 'left',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};width: '100%',
  height: 'calc(100% - 80px)',
  position: 'relative',
  overflow: 'hidden',
};
const lastStyle = {
  height: '100%',
  padding: '2rem',
};

function WarppedSelectionList(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <SelectionList {...props} data={Object.values(appState.citys)} />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedSelectionList,
};

storiesOf('Elements', module).add(
  'SelectionList',
  withPropsCombinations(
    WarppedSelectionList,
    {
      class: ['light', 'dark'],
      value: ['', 'Input Text'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
