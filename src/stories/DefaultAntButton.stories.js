import React from 'react';
import DefaultAntButton from './DefaultAntButton';
import {DownloadOutlined} from '@ant-design/icons';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const iconMap = {DownloadOutlined};

const args = {
  type: {
    control: {
      type: 'select',
      options: ['secondary', 'dashed', 'primary', 'text', 'link'],
    },
  },
  icon: {
    control: {
      type: 'select',
      options: Object.keys(iconMap),
    },
  },
  shape: {
    control: {type: 'select', options: ['round', 'circle', 'default']},
  },
  danger: {control: {type: 'select', options: [true, false]}},
  disabled: {control: {type: 'select', options: [true, false]}},
  size: {control: {type: 'select', options: ['large', 'default', 'small']}},
  title: {
    control: {
      type: 'text',
    },
  },
};

export default {
  title: 'Buttons/AntDesign',
  component: DefaultAntButton,
  argTypes: args,
};

export const Default = ({icon, ...args}) => {
  const selectedIcon = iconMap[icon];
  return (
    <DefaultAntButton
      icon={selectedIcon}
      type={'primary'}
      title={'Ant Design'}
      {...args}
    />
  );
};

storiesOf('Buttons/Primary', module).add(
  'Standard usage',
  withPropsCombinations(
    // provide your component
    DefaultAntButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      disabled: [false, true],
      type: ['primary'],
      shape: ['default', 'round', 'circle'],
      danger: [false, true],
      title: ['Ant Design'],
      size: ['large', 'default', 'small'],
      icon: [false, DownloadOutlined],
    },
    {showSource: false, style: {display: 'inline-flex', margin: '1rem'}},
  ),
);

storiesOf('Buttons/Secondary', module).add(
  'Standard usage',
  withPropsCombinations(
    // provide your component
    DefaultAntButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      disabled: [false, true],
      type: ['secondary', 'dashed', 'text', 'link'],
      shape: ['default', 'round', 'circle'],
      danger: [false, true],
      title: ['Ant Design'],
      size: ['large', 'default', 'small'],
      icon: [false, DownloadOutlined],
    },
    {showSource: false, style: {display: 'inline-flex', margin: '1rem'}},
  ),
);
