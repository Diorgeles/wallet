import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Routes from 'routes';
import { AuthProvider } from 'contexts/authContext';
import { ThemeProvider } from 'contexts/themeContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
