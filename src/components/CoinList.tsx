import btc from 'cryptocurrency-icons/32/color/btc.png';
import eth from 'cryptocurrency-icons/32/color/eth.png';
import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const CoinList: React.FunctionComponent = () => {
  return (
    <>
      <Container activeOpacity={0.7}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image
              source={eth}
              style={{ marginRight: 25 }}
              width={32}
              height={32}
            />
          </View>
          <View>
            <Text variant="List1">Ether</Text>
            <Text variant="List2">42.2%</Text>
          </View>
        </View>
        <View>
          <Text variant="List1">12.42 ETH</Text>
          <Text variant="List2">$12,536.39</Text>
        </View>
      </Container>
      <Container activeOpacity={0.7}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image
              source={btc}
              style={{ marginRight: 25 }}
              width={32}
              height={32}
            />
          </View>
          <View>
            <Text variant="List1">Bitcoin</Text>
            <Text variant="List2">12.6%</Text>
          </View>
        </View>
        <View>
          <Text variant="List1">1.48 BTC</Text>
          <Text variant="List2">$38,536.39</Text>
        </View>
      </Container>
    </>
  );
};

const Container = styled.TouchableOpacity`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export default CoinList;
