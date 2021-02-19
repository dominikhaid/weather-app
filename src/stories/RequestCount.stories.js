import React from 'react';
import RequestCount from 'src/components/RequestCount';
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
  height: 'calc(100% - 80px)',
  position: 'relative',
  overflow: 'hidden',
};

const lastStyle = {
  height: '100%',
  width: '150px',
  padding: '2rem',
};

function WarrpedCount(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg no-css`}>
        <RequestCount {...props} />
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
      style: mainStyle,
    },
  ),
);
