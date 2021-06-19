import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      handleColor: string;

      background: string;
      text: string;
    }
  }
}
