import MyBadge from 'components/badge/';
import MyBox from 'components/box';
import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';

const BoxListLastEntries = () => {
  const { colors } = useTheme();
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
  );
};

export default BoxListLastEntries;
