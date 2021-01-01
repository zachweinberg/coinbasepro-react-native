import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import MarketRow from '../components/MarketRow';
import Text from '../components/Text';
import { NavigationComponent } from '../navigation';

const MARKETS = [
  { name: 'BTC - USD', price: 29416.66 },
  { name: 'ETH - USD', price: 737.77 },
  { name: 'ETH - USD', price: 737.77 },
  { name: 'ETH - USD', price: 737.77 },
];

const MarketsScreen: NavigationComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.labelBar}>
        <Text type="tertiary" size={17} bold>
          FIAT MARKETS
        </Text>
        <Text type="tertiary" size={17} bold>
          24HR
        </Text>
      </View>
      <FlatList
        data={MARKETS}
        renderItem={({ item }) => <MarketRow market={item} />}
      />
    </SafeAreaView>
  );
};

MarketsScreen.options = () => ({
  topBar: {
    searchBar: {
      visible: true,
      tintColor: 'white',
      backgroundColor: '#1a1a1a',
    },
    searchBarPlaceholder: 'Search',
    title: {
      text: 'Markets',
    },
  },
});

export default MarketsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  labelBar: {
    backgroundColor: 'black',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
