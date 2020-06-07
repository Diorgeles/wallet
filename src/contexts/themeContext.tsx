import React, { useState } from 'react';
import { ThemeContext } from 'styled-components';
import light from 'resources/themes/light';
import dark from 'resources/themes/dark';
import fonts from 'resources/themes/fonts';

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light.colors);

  const handleSetTheme = (_theme: string) => {
    switch (_theme) {
      case 'dark':
        setTheme(dark.colors);
        break;

      default:
        setTheme(light.colors);
        break;
    }
  };
  return (
    <ThemeContext.Provider value={{ colors: theme, handleSetTheme, fonts }}>
      {children}
    </ThemeContext.Provider>
  );
};
