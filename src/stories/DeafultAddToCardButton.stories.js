import React from 'react';
import {appState} from '../../../stories/data-mockup';
import DeafultAddToCardButton from './DeafultAddToCardButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import {ShoppingCartOutlined} from '@ant-design/icons';

export default {
  title: 'Buttons/Confirm',
  component: DeafultAddToCardButton,
};

storiesOf('Buttons/Confirm', module).add(
  'Standard usage',
  withPropsCombinations(
    // provide your component
    DeafultAddToCardButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      shape: ['default', 'round', 'circle'],
      item: [appState.products[0]],
      updateCard: [appState.updateCard],
      activeColor: [appState.card.products[0].color],
      size: ['large', 'default', 'small'],
      Icon: [false, ShoppingCartOutlined],
    },
    {showSource: false, style: {display: 'inline-flex', margin: '1rem'}},
  ),
);

// export const Primary = () => (
//   <DeafultAddToCardButton
// item={appState.products[0]}
// updateCard={appState.updateCard}
// activeColor={appState.card.products[0].color}
//   />
// );
