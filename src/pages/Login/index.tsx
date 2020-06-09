import React from 'react';

import { Icon, Image } from 'react-native-elements';
import { Platform } from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  HeaderContent,
  HeaderContentFieldGroup,
  MyInput,
  ButtonForgotPassword,
  Footer,
  ButtonSingUp,
  ButtonSingIn,
  Divider,
} from './styles';
import { useTheme } from 'styled-components';

const Login = () => {
  const { colors, handleSetTheme } = useTheme();

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Header>
        <Image
          style={{ width: 96, height: 96 }}
          source={require('resources/img/logo.png')}
        />
        <HeaderText>BEM VINDO</HeaderText>
        <HeaderContent>
          <HeaderContentFieldGroup>
            <MyInput
              placeholder="Email"
              placeholderTextColor={colors.TEXT_DISABLE}
              leftIcon={
                <Icon
                  name="envelope"
                  type="font-awesome-5"
                  size={24}
                  color={colors.TEXT_DISABLE}
                />
              }
            />

            <Divider />

            <MyInput
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor={colors.TEXT_DISABLE}
              leftIcon={
                <Icon
                  name="lock"
                  type="font-awesome-5"
                  size={24}
                  color={colors.TEXT_DISABLE}
                />
              }
            />
          </HeaderContentFieldGroup>
          <ButtonForgotPassword type="clear" title="Esqueceu a senha?" />
        </HeaderContent>
      </Header>
      <Footer>
        <ButtonSingUp
          title="CRIAR CONTA"
          type="clear"
          onPress={() => handleSetTheme('light')}
        />
        <ButtonSingIn title="LOGIN" onPress={() => handleSetTheme('dark')} />
      </Footer>
    </Container>
  );
};

export default Login;
