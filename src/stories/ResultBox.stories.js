import React from 'react';
import ResultBox from 'src/components/ResultBox';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  maxHeight: '100px',
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
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={{...innerStyle}} id="main">
          <div style={{...lastStyle}}>
            <ResultBox
              {...props}
              style={{minWidth: '500px'}}
              data={data}
              visible={!true}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarrpedResultBox,
};

storiesOf('Elements', module).add(
  'Result Box',
  withPropsCombinations(
    WarrpedResultBox,
    {
      class: ['light', 'dark'],
      isLoading: [true, false],
    },
    {
      showSource: true,
    },
  ),
);
