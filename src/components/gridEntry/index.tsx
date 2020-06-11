import React from 'react';
import {
  Grid,
  Container,
  IconIncome,
  IconSpending,
  IconContent,
  MyIcon,
  Title,
  AmountText,
} from './styles';

const GridEntry: React.FC = () => {
  return (
    <Grid>
      <Container>
        <IconIncome>
          <MyIcon name="arrow-downward" />
        </IconIncome>
        <IconContent>
          <Title>Entrada</Title>
          <AmountText>R$ 1000</AmountText>
        </IconContent>
      </Container>
      <Container>
        <IconSpending>
          <MyIcon name="arrow-upward" />
        </IconSpending>
        <IconContent>
          <Title>Saída</Title>
          <AmountText>R$ 400</AmountText>
        </IconContent>
      </Container>
    </Grid>
  );
};

export default GridEntry;
