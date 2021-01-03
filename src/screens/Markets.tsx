import React, { useState } from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import useSwr from 'swr';
import { getProductStats } from '../api/products';
import Text from '../components/Text';

const renderLabelBar = () => (
  <LabelBar>
    <Text type="tertiary" size={17} bold>
      FIAT MARKETS
    </Text>
    <Text type="tertiary" size={17} bold>
      24HR
    </Text>
  </LabelBar>
);

const MarketsScreen = () => {
  const { data: productsMap, error } = useSwr('products', getProductStats);
  const [search, setSearch] = useState('');

  if (!productsMap) {
    return null;
  }

  const sections = [{ title: 'Fiat', data: Object.keys(productsMap) }];

  return (
    <Container>
      <SectionList
        sections={sections}
        renderSectionHeader={renderLabelBar}
        renderItem={({ item }) => <Text>{item}</Text>}
        style={{ flex: 1 }}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

const LabelBar = styled.View`
  background-color: black;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

export default MarketsScreen;
