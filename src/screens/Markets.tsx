import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import useSwr from 'swr';
import { getProductStats } from '../api/products';
import MarketRow from '../components/MarketRow';
import Text from '../components/Text';
import { NavigationComponent } from '../navigation';

const MarketsScreen: NavigationComponent = () => {
  const { data: productsMap, error } = useSwr('products', getProductStats);

  if (error) {
    return (
      <Text type="red" size={15} bold>
        Could not load markets
      </Text>
    );
  }

  if (!productsMap) {
    return null;
  }

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
        data={Object.keys(productsMap)}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.5}>
            <MarketRow name={item} product={productsMap[item]} />
          </TouchableOpacity>
        )}
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
    padding: 25,
  },
});

export default MarketsScreen;
