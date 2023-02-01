import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryFour: string;
      deleteAction: string;
      white: string;
      mainBackgroundColor: string;
      secondaryBackgroundColor: string;
      light: string;
      gray: string;
      black: string;
      lightgrey: string;
    };
    fonts: {
      spartanRegular: string;
    };
  }
}
