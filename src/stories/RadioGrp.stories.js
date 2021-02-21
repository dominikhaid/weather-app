import React from 'react';
import RadioGrp from 'src/components/RadioGrp';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  maxHeight: '45px',
};

function WarppedRadioGrp(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={{...innerStyle}} id="main">
          <RadioGrp fields={radioFields} />
        </main>
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
    },
  ),
);
