import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import CoinList from '../components/CoinList';
import Text from '../components/Text';

const PortfolioScreen = () => {
  return (
    <Scroll>
      <Container>
        <View>
          <Text variant="CurrencyLabel">Default Portfolio</Text>
          <Text variant="Currency">$26,006.31</Text>
        </View>

        <LabelRow>
          <View style={{ width: '50%' }}>
            <Text variant="CurrencyLabel">Available Balance</Text>
            <Text variant="Currency">$26,006.31</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text variant="CurrencyLabel">On orders</Text>
            <Text variant="Currency">$200.00</Text>
          </View>
        </LabelRow>

        <View style={{ marginTop: 22 }}>
          <Text variant="Label2">WALLETS</Text>
          <ButtonContainer>
            <Button
              title="Deposit"
              variant="Basic"
              onPress={() => null}
              style={{ width: '46%' }}
            />
            <Button
              title="Withdraw"
              variant="Basic"
              onPress={() => null}
              style={{ width: '46%' }}
            />
          </ButtonContainer>
        </View>
        <CoinList />
      </Container>
    </Scroll>
  );
};

const Scroll = styled.ScrollView`
  background-color: black;
`;

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LabelRow = styled.View`
  flex-direction: row;
`;

export default PortfolioScreen;
