import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';
import { Market } from '../types';

interface Props {
  market: Market;
}

const MarketRow: React.FunctionComponent<Props> = ({ market }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text type="primary" size={18} bold>
          {market.name}
        </Text>
        <Text type="secondary" size={13} bold style={{ marginTop: 5 }}>
          {market.price}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View>
        <Text type="primary" size={18} bold>
          ${market.price}
        </Text>
        <Text type="green" size={13} bold style={styles.pctChange}>
          +2.45%
        </Text>
      </View>
    </View>
  );
};

export default MarketRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    marginBottom: 17,
  },
  pctChange: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
