import React from 'react';
import SearchField from 'src/components/SearchField';
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

function WarppedSearchField(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={`main-bg`}>
        <SearchField {...props} title={'Title'} />
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedSearchField,
};

storiesOf('Elements', module).add(
  'SearchField',
  withPropsCombinations(
    WarppedSearchField,
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
