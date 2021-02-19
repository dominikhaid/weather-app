import React from 'react';
import RadioGrp from 'src/components/RadioGrp';
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

function WarppedRadioGrp(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <RadioGrp fields={radioFields} />
      </div>
    </div>
  );
}

const radioFields = [
  {
    id: 'jetzt',
    label: 'Jetzt',
    group: 'radioGroup',
    value: 'current',
    checked: 'current',
    onChange: e => {
      e.target.checked = true;
    },
  },
  {
    id: 'heute',
    label: 'Heute',
    group: 'radioGroup',
    value: 'tomorrow',
    onChange: e => {
      e.target.checked = true;
    },
  },
  {
    id: 'fiveday',
    label: 'fünf Tage',
    group: 'radioGroup',
    value: 'fiveday',
    onChange: e => {
      e.target.checked = true;
    },
  },
];

export default {
  title: 'Elements',
  component: WarppedRadioGrp,
};

storiesOf('Elements', module).add(
  'Radio Grp',
  withPropsCombinations(
    WarppedRadioGrp,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
