import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

export const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.BG_WHITE};
  margin-bottom: 25px;
  border-radius: 12px;
  margin-right: 15px;
  min-height: 200px;
  margin-left: 15px;
  elevation: 5;
  align-items: center;
`;

export const BoxHeader = styled.View`
  flex-direction: row;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-bottom: 15px;
`;

export const BoxBody = styled.View`
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const BoxFooter = styled.View``;

export const BoxFooterButton = styled(Button).attrs(({ theme }) => ({
  type: 'clear',
  containerStyle: {
    height: 55,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
    fontFamily: theme.fonts[700],
    letterSpacing: 1,
  },
}))``;
