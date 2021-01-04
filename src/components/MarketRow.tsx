import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Product } from '../api/products';
import Colors from '../colors';
import Text from '../components/Text';
import { getPercentChange, getPrettyNumber } from '../utils/numbers';

interface Props {
  product: Product;
}

const MarketRow: React.FunctionComponent<Props> = ({ product }: Props) => {
  const percentChange = getPercentChange(product.open, product.last);

  return (
    <Container>
      <View>
        <Text variant="List1">
          {product.baseCurrency} - {product.quoteCurrency}
        </Text>
        <Text variant="List2">
          {getPrettyNumber(product.volume)} {product.baseCurrency}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View>
        <Text variant="List1">${product.last}</Text>
        <Text
          variant="List2"
          color={percentChange >= 0 ? Colors.Green : Colors.Red}
          right>
          {percentChange >= 0 && '+'}
          {percentChange}%
        </Text>
      </View>
    </Container>
  );
};

export default MarketRow;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: black;
  margin-bottom: 22px;
`;
