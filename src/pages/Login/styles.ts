import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';

const { width } = Dimensions.get('window');

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_SECONDARY};
  align-items: center;
  padding: 0px 15px;
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
  border-radius: 5px;
`;

export const HeaderContentFieldGroup = styled.View`
  background-color: ${({ theme }) => theme.colors.BG_WHITE};
  padding: 0px 5px 0px;
  border-radius: 4px;
  margin-bottom: 15px;
  elevation: 5;
`;

export const MyInput = styled(Input).attrs(({ theme }) => ({
  containerStyle: {
    paddingTop: 15,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: theme.fonts[400],
    color: theme.colors.TEXT_DEFAULT,
  },
  errorStyle: {
    marginBottom: 0,
  },
}))``;

export const ButtonForgotPassword = styled(Button).attrs(({ theme }) => ({
  buttonStyle: {
    justifyContent: 'flex-start',
    paddingLeft: 0,
    width: '40%',
  },
  titleStyle: {
    fontSize: 15,
    lineHeight: 16,
    fontFamily: theme.fonts[600],
    color: theme.colors.PRIMARY,
  },
}))``;

export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
`;

export const ButtonSingUp = styled(Button).attrs(({ theme }) => ({
  buttonStyle: {
    width: 167,
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
    letterSpacing: 1,
  },
}))``;
export const ButtonSingIn = styled(Button).attrs(({ theme }) => ({
  buttonStyle: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 4,
    width: 167,
  },
  titleStyle: {
    color: theme.colors.BG_WHITE,
    fontFamily: theme.fonts[700],
    letterSpacing: 1,
  },
}))``;
