import React from 'react';
import { Text, View } from 'react-native';
import { NavigationComponent } from '../navigation';

const MarketsScreen: NavigationComponent = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'white' }}>Markets</Text>
    </View>
  );
};

MarketsScreen.options = () => ({
  topBar: {
    title: {
      text: 'Markets',
    },
  },
});

export default MarketsScreen;
