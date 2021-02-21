import React from 'react';
import SearchField from 'src/components/SearchField';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {
  padding: 'var(--weather-paddig-y) var(--weather-paddig-x)',
};

const lastStyle = {
  maxHeight: '100px',
};

function WarppedSearchField(props) {
  return (
    <div className="bg-secondary-lightest dark:bg-gray-darkest">
      <div id="__next" className={`${props.class}`}>
        <nav id="main-menu"></nav>
        <main style={{...innerStyle}} id="main">
          <SearchField {...props} title={'Title'} />
        </main>
      </div>
    </div>
  );
}

export default {
  title: 'Elements',
  component: WarppedSearchField,
};

storiesOf('Elements', module).add(
  'Search Field',
  withPropsCombinations(
    WarppedSearchField,
    {
      class: ['light', 'dark'],
      value: ['', 'Input Text'],
    },
    {
      showSource: true,
    },
  ),
);
