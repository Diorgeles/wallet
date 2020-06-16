import MyBadge from 'components/badge/';
import MyBox from 'components/box';
import GridEntry from 'components/gridEntry';
import { shade } from 'polished';
import React from 'react';
import { Dimensions } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';
import { useTheme } from 'styled-components/native';

const { height } = Dimensions.get('window');

const BoxOverviewStackedBarChart = () => {
  const { colors, fonts } = useTheme();

  return (
    <MyBox
      marginTop={height * 0.08}
      boxHeader={
        <>
          <MyBadge value="7 dias" />
          <MyBadge value="15 dias" />
          <MyBadge value="30 dias" />
        </>
      }>
      <GridEntry />
      <StackedBarChart
        data={{
          labels: ['Inter', 'Carteira'],
          legend: ['Receita', 'Despesa'],
          data: [
            [700, 400],
            [800, 400],
          ],
          barColors: [shade(0.1, '#A7DE68'), shade(0.1, '#EB8E9F')],
        }}
        width={320}
        height={200}
        chartConfig={{
          backgroundGradientFrom: colors.BG_WHITE,
          backgroundGradientTo: colors.BG_WHITE,
          color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => colors.TEXT_DEFAULT,
          barPercentage: 1.2,
          barRadius: 2,
          propsForLabels: { fontSize: 10, fontFamily: fonts[700] },
        }}
        style={{
          marginVertical: 25,
          elevation: 5,
        }}
        hideLegend={false}
        segments={3}
      />
    </MyBox>
  );
};

export default BoxOverviewStackedBarChart;
