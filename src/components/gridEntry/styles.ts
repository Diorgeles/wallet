import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native-elements';

export const Grid = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconIncome = styled.View`
  background-color: ${({ theme }) => theme.colors.INCOME};
  width: 47px;
  height: 47px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const IconSpending = styled.View`
  background-color: ${({ theme }) => theme.colors.SPENDING};
  width: 47px;
  height: 47px;
  flex-direction: row;
  justify-content: center;
  border-radius: 30px;
  padding-top: 3px;
`;

export const IconContent = styled.View`
  margin-left: 10px;
`;

export const MyIcon = styled(Icon).attrs(({ theme }) => ({
  size: 40,
  color: theme.colors.BG_WHITE,
}))``;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts[600]};
  color: ${({ theme }) => theme.colors.TEXT_DISABLE};
  font-size: 14px;
`;
export const AmountText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.TEXT_DEFAULT};
  font-size: 17px;
`;
