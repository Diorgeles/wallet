import React, { useState } from 'react';
import { ThemeContext } from 'styled-components';
import light from 'resources/themes/light';
import dark from 'resources/themes/dark';
import fonts from 'resources/themes/fonts';
import { StatusBar } from 'react-native';

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light.colors);
  const [titleTheme, setTitleTheme] = useState<'dark' | 'light'>('light');

  const handleSetTheme = (_theme: string) => {
    switch (_theme) {
      case 'dark':
        setTitleTheme('dark');
        setTheme(dark.colors);
        break;

      default:
        setTitleTheme('light');
        setTheme(light.colors);
        break;
    }
  };
  return (
    <ThemeContext.Provider
      value={{ colors: theme, handleSetTheme, fonts, titleTheme }}>
      <StatusBar
        barStyle={titleTheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.BG_SECONDARY}
      />
      {children}
    </ThemeContext.Provider>
  );
};
