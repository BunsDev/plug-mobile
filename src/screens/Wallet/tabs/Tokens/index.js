import React from 'react';
import { View } from 'react-native';

import Icon from '../../../../components/icons';

import TokenItem from './components/TokenItem';

const TOKENS = [
  {
    symbol: 'ICP',
    name: 'ICP',
    amount: 152.28,
    value: 12183.29,
    icon: <Icon name="dfinity" />,
  },
  {
    symbol: 'XTC',
    name: 'Cycles',
    amount: 102.2913,
    value: 102.3,
    icon: <Icon name="xtc" />,
  },
];

const Tokens = () => {
  return (
    <View>
      {TOKENS.map(token => (
        <TokenItem key={token.symbol} {...token} />
      ))}
    </View>
  );
};

export default Tokens;
