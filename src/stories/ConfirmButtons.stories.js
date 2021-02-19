import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import ConfirmButtons from 'src/components/ConfirmButtons';

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

function WarppedConfirmButtons(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <ConfirmButtons {...props} ok={'Confirm'} cancel={'Abort'} />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedConfirmButtons,
};

storiesOf('Elements', module).add(
  'ConfirmButtons',
  withPropsCombinations(
    WarppedConfirmButtons,
    {
      class: ['light', 'dark'],
      disabled: [true, false],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
