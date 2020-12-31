import React from 'react';
import { Text, View } from 'react-native';
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
    </View>
  );
};

OrdersScreen.options = () => ({
  topBar: {
    title: {
      text: 'Orders',
    },
  },
});

export default OrdersScreen;
