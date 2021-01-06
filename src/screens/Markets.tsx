import React, { useState } from 'react';
import { SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import useSwr from 'swr';
import { getProducts } from '../api/products';
import MarketRow from '../components/MarketRow';
import Text from '../components/Text';

const renderLabelBar = () => (
  <LabelBar>
    <Text variant="Label1">FIAT MARKETS</Text>
    <Text variant="Label1">24HR</Text>
  </LabelBar>
);

const MarketsScreen = () => {
  const { data: products, error } = useSwr('products', getProducts);
  const [search, setSearch] = useState('');

  if (!products) {
    return null;
  }

  if (error) {
    return <Text variant="Label1">Could not load markets</Text>;
  }

  const sections = [{ title: 'Markets', data: products }];

  return (
    <Container>
      <SearchBar
        placeholder="Search"
        placeholderTextColor="#ccc"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <SectionList
        sections={sections}
        renderSectionHeader={renderLabelBar}
        keyExtractor={(item) => `${item.baseCurrency}-${item.quoteCurrency}`}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.7}>
            <MarketRow product={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 20px;
`;

const LabelBar = styled.View`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: black;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchBar = styled.TextInput`
  opacity: 0.8;
  color: #fff;
  padding: 10px;
  border-radius: 18px;
  background-color: #1a1a1a;
  font-size: 18px;
`;

export default MarketsScreen;
