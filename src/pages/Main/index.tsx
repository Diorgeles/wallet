import BoxListLastEntries from 'components/boxes/BoxListLastEntries';
import BoxOverviewStackedBarChart from 'components/boxes/BoxOverviewStackedBarChart';
import React from 'react';
import { Text } from 'react-native-elements';
import { useTheme } from 'styled-components/native';
import { Container, ScrollView, StatusBar } from './styles';

const Main = () => {
  const { colors, fonts } = useTheme();

  return (
    <Container>
      <StatusBar />
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            fontFamily: fonts[600],
            color: colors.BG_WHITE,
            top: 20,
          }}>
          R$ 1.000.000
        </Text>
        <BoxOverviewStackedBarChart />
        <BoxListLastEntries />
      </ScrollView>
    </Container>
  );
};

export default Main;
