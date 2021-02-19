import React from 'react';
import ResultBox from 'src/components/ResultBox';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

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

const data = [
  {
    title: 'Darmstadt',
  },
  {
    title: 'Result2',
  },
];

function WarrpedResultBox(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <ResultBox {...props} data={data} visible={true} />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarrpedResultBox,
};

storiesOf('Elements', module).add(
  'ResultBox',
  withPropsCombinations(
    WarrpedResultBox,
    {
      class: ['light', 'dark'],
      isLoading: [true, false],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
