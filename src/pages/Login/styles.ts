import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_SECONDARY};
  align-items: center;
  margin: 0px 15px;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-top: 35px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.TEXT_DEFAULT};
  font-family: ${({ theme }) => theme.fonts[900]};
  line-height: 53px;
`;

export const HeaderContent = styled.View`
  width: ${width}px;
  padding: 30px 15px;
  align-items: flex-start;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
`;
