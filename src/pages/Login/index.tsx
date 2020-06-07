import React from 'react';

import { Icon, Input, Image, Divider, Button } from 'react-native-elements';
import { Platform, View } from 'react-native';
import { Container, Header, HeaderText, HeaderContent, Footer } from './styles';
import { useTheme } from 'styled-components';

const Login = () => {
  const { colors, fonts } = useTheme();

  const containerStyle = {
    backgroundColor: colors.BG_WHITE,
    elevation: 5,
    paddingHorizontal: 15,
    paddingTop: 15,
  };
  const inputContainerStyle = {
    borderBottomWidth: 0,
  };
  const inputStyle = {
    paddingTop: 13,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: fonts[400],
    color: colors.TEXT_DEFAULT,
  };

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Header>
        <Image
          style={{ width: 96, height: 96 }}
          source={require('resources/img/logo.png')}
        />
        <HeaderText>BEM VINDO</HeaderText>
        <HeaderContent>
          <Input
            placeholder="Email"
            inputContainerStyle={inputContainerStyle}
            placeholderTextColor={colors.TEXT_DISABLE}
            inputStyle={inputStyle}
            containerStyle={{
              ...containerStyle,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
            errorStyle={{
              marginBottom: 0,
            }}
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
          <Input
            placeholder="Senha"
            secureTextEntry
            inputContainerStyle={inputContainerStyle}
            placeholderTextColor={colors.TEXT_DISABLE}
            inputStyle={inputStyle}
            containerStyle={{
              ...containerStyle,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              marginBottom: 10,
            }}
            errorStyle={{
              marginBottom: 0,
            }}
            leftIcon={
              <Icon
                name="lock"
                type="font-awesome-5"
                size={24}
                color={colors.TEXT_DISABLE}
              />
            }
          />
          <Button
            type="clear"
            title="Esqueceu a senha?"
            buttonStyle={{
              paddingLeft: 0,
            }}
            titleStyle={{
              fontSize: 15,
              lineHeight: 16,
              fontFamily: 'Nunito',
              color: colors.BG_PRIMARY,
            }}
          />
        </HeaderContent>
      </Header>
      <Footer>
        <Button
          title="CRIAR CONTA"
          type="clear"
          buttonStyle={{
            width: 167,
          }}
          titleStyle={{
            color: colors.PRIMARY,
            letterSpacing: 1,
          }}
        />
        <Button
          title="LOGIN"
          buttonStyle={{
            backgroundColor: colors.PRIMARY,
            borderRadius: 4,
            width: 167,
          }}
          titleStyle={{
            color: colors.BG_WHITE,
            fontFamily: fonts[700],
            letterSpacing: 1,
          }}
        />
      </Footer>
    </Container>
  );
};

export default Login;
