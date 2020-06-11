import React, { useState } from 'react';
import { Container, StatusBar, ScrollView } from './styles';
import MyBox from 'components/box';
import { Dimensions } from 'react-native';
import MyBadge from 'components/badge/';
import { useTheme } from 'styled-components/native';
import GridEntry from 'components/gridEntry';
import { StackedBarChart } from 'react-native-chart-kit';
import { shade } from 'polished';

const { height } = Dimensions.get('window');

const Main = () => {
  const { colors, fonts } = useTheme();
  const [incomeFilter, setIncomeFilter] = useState(false);
  const [spendingFilter, setSpendingFilter] = useState(false);
  const [allFilter, setAllFilter] = useState(true);

  const handleSetFilter = (_filter: string) => {
    switch (_filter) {
      case 'income':
        setAllFilter(false);
        setSpendingFilter(false);
        setIncomeFilter(true);
        break;

      case 'spending':
        setAllFilter(false);
        setIncomeFilter(false);
        setSpendingFilter(true);
        break;

      default:
        setIncomeFilter(false);
        setSpendingFilter(false);
        setAllFilter(true);
        break;
    }
  };

  return (
    <Container>
      <StatusBar />
      <ScrollView>
        <MyBox
          marginTop={height * 0.27}
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
        <MyBox
          boxHeader={
            <>
              <MyBadge
                value="Tudo"
                isActiveColor={allFilter ? colors.PRIMARY : ''}
                onPress={() => handleSetFilter('all')}
              />
              <MyBadge
                value="Receitas"
                isActiveColor={incomeFilter ? colors.INCOME : ''}
                onPress={() => handleSetFilter('income')}
              />
              <MyBadge
                value="Despesas"
                isActiveColor={spendingFilter ? colors.SPENDING : ''}
                onPress={() => handleSetFilter('spending')}
              />
            </>
          }
        />
      </ScrollView>
    </Container>
  );
};

export default Main;
