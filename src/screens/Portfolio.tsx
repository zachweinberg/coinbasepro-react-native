import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Text from '../components/Text';
import { NavigationComponent } from '../navigation';

const PortfolioScreen: NavigationComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View>
          <Text type="secondary" size={17} style={styles.label}>
            Default Portfolio
          </Text>
          <Text type="primary" size={20} bold>
            $20,000.00
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text type="secondary" size={17} style={styles.label}>
              Available Balance
            </Text>
            <Text type="primary" size={20} bold>
              $19,800.00
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text type="secondary" size={17} style={styles.label}>
              On orders
            </Text>
            <Text type="primary" size={20} bold>
              $200.00
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 22 }}>
          <Text type="secondary" size={18} spread style={{ marginBottom: 7 }}>
            WALLETS
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button title="Deposit" style={{ width: '50%', marginRight: 5 }} />
            <Button title="Withdraw" style={{ width: '50%', marginLeft: 5 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapper: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  balances: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 10,
  },
});

export default PortfolioScreen;
