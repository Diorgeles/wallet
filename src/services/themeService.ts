import storageService from './storageService';
import { ColorThemeProps } from 'contexts/ThemeContext';

export async function setTheme(theme: ColorThemeProps) {
  return await storageService.theme.set({ color: theme.color });
}
