import React, { useState } from 'react';
import { Container, StatusBar, ScrollView } from './styles';
import MyBox from 'components/box';
import { Dimensions } from 'react-native';
import MyBadge from 'components/badge/';
import { useTheme } from 'styled-components/native';
import GridEntry from 'components/gridEntry';
import { BarChart } from 'react-native-chart-kit';

const { height, width } = Dimensions.get('window');

const Main = () => {
  const { colors, fonts } = useTheme();
  const [incomeFilter, setIncomeFilter] = useState(false);
  const [spendingFilter, setSpendingFilter] = useState(false);
  const [allFilter, setAllFilter] = useState(true);

  const data = {
    labels: ['Receita', 'Despesa'],
    datasets: [
      {
        data: [5700, 4000],
      },
    ],
  };

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
          <BarChart
            fromZero
            segments={3}
            width={300}
            height={200}
            data={data}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: () => colors.TEXT_DEFAULT,
              linejoinType: 'square',
            }}
            style={{
              marginVertical: 25,
              marginHorizontal: 25,
            }}
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
