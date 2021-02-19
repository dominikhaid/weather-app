import React from 'react';
import Footer from 'src/components/Footer';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const mainStyle = {
  display: 'block',
  float: 'left',
  margin: '1rem',
  width: '100%',
  maxWidth: 'calc(100vw - 2rem)',
  height: '50vh',
  maxHeight: '900px',
  overflow: 'hidden',
};

const innerStyle = {
  width: '100%',
  position: 'relative',
  height: '90%',
  maxHeight: '900px',
};

const lastStyle = {
  height: '100%',
};

function WarppedFooter(props) {
  return (
    <div style={{...innerStyle}} className={`${props.class}`}>
      <div style={{...lastStyle}} className={'main-bg'}>
        <Footer {...props} />
      </div>
    </div>
  );
}

export default {
  title: 'Container',
  component: WarppedFooter,
};

storiesOf('Container', module).add(
  'Footer',
  withPropsCombinations(
    WarppedFooter,
    {
      class: ['light', 'dark'],
    },
    {
      showSource: true,
      style: mainStyle,
    },
  ),
);
