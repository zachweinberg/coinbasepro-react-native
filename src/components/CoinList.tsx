import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';
import { coins } from '../data/coins';

const CoinList: React.FunctionComponent = () => {
  return (
    <>
      {coins.map((coin) => (
        <Container activeOpacity={0.7} key={coin.name}>
          <Row>
            <View>
              <CoinIcon source={coin.image} width={32} height={32} />
            </View>
            <View>
              <Text variant="List1">{coin.name}</Text>
              <Text variant="List2">42.2%</Text>
            </View>
          </Row>
          <View>
            <Text variant="List1">
              {coin.quantity} {coin.acronym.toUpperCase()}
            </Text>
            <Text variant="List2">$12,536.39</Text>
          </View>
        </Container>
      ))}
    </>
  );
};

const Container = styled.TouchableOpacity`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CoinIcon = styled.Image`
  margin-right: 20px;
`;

export default CoinList;
