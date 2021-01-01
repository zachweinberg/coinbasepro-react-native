import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CoinbaseProductStat, CoinbaseSparkline } from '../api/products';
import Text from '../components/Text';
import { getPercentChange } from '../utils/pricing';

interface Props {
  name: string;
  product: CoinbaseProductStat;
  sparkline: CoinbaseSparkline | undefined;
}

const MarketRow: React.FunctionComponent<Props> = ({
  name,
  product,
  sparkline,
}: Props) => {
  const percentChange = getPercentChange(
    product.stats_24hour.open,
    product.stats_24hour.last,
  );

  return (
    <View style={styles.container}>
      <View>
        <Text type="primary" size={17} bold>
          {name}
        </Text>
        <Text type="secondary" size={13} bold style={{ marginTop: 5 }}>
          {product.stats_24hour.volume}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View>
        <Text type="primary" size={18} bold>
          ${product.stats_24hour.last}
        </Text>
        <Text
          type={percentChange < 0 ? 'red' : 'green'}
          size={14}
          bold
          style={styles.pctChange}>
          {percentChange >= 0 && '+'}
          {percentChange}%
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
    paddingHorizontal: 25,
    marginBottom: 17,
  },
  pctChange: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
