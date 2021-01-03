import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationComponent } from '../navigation';

const OrdersScreen: NavigationComponent = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'white' }}>Orders</Text>
      <Bar>asdf</Bar>
    </View>
  );
};

const Bar = styled.Text`
  background-color: red;
  width: 300;
`;

export default OrdersScreen;
