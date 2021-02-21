import React from 'react';
import RequestCount from 'src/components/RequestCount';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {
  maxWidth: '50px',
};

const htmlStyle = {
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
};

function WarrpedCount(props) {
  return (
    <div
      style={{...htmlStyle}}
      className="bg-secondary-lightest dark:bg-gray-darkest"
    >
      <div className={`${props.class}`}>
        <div className="main-bg" style={{...innerStyle}}>
          <RequestCount {...props} />
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarrpedCount,
};

storiesOf('Elements', module).add(
  'Request Count',
  withPropsCombinations(
    WarrpedCount,
    {
      class: ['light', 'dark'],
      limit: [10, 0],
    },
    {
      showSource: true,
    },
  ),
);
