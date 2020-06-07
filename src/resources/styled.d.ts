import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    handleSetTheme(theme: string): void;
    fonts: {
      /**@alias Black */
      900: string;
      /**@alias BlackItalic */
      I900: string;

      /**@alias ExtraBold */
      800: string;
      /**@alias ExtraBoldItalic */
      I800: string;

      /**@alias Bold */
      700: string;
      /**@alias BoldItalic */
      I700: string;

      /**@alias SemiBold */
      600: string;
      /**@alias SemiBoldItalic */
      I600: string;

      /**@alias Regular */
      400: string;
      /**@alias RegularItalic */
      I400: string;

      /**@alias Light */
      300: string;
      /**@alias LightItalic */
      I300: string;

      /**@alias ExtraLight */
      200: string;
      /**@alias ExtraLightItalic */
      I200: string;
    };
    colors: {
      PRIMARY: string;
      BG_PRIMARY: string;
      BG_SECONDARY: string;
      BG_SEPARATOR: string;
      BG_WHITE: string;
      TEXT_DEFAULT: string;
      TEXT_DISABLE: string;
      PRIMARY_CLOUD: string;
      INCOME: string;
      SPENDING: string;
    };
  }
}
