import React from 'react';
import {
  Container,
  StatusBar,
  ContentChart,
  ContentChartHeader,
  Divider,
  Text,
} from './styles';

const Main = () => {
  return (
    <Container>
      <StatusBar />
      <ContentChart>
        <ContentChartHeader></ContentChartHeader>
        <Divider />
        <Text>GRÁFICOS</Text>
      </ContentChart>
    </Container>
  );
};

export default Main;
