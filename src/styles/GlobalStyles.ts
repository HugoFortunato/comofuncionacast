import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: Lexend, sans-serif;
  }

  #__next > div {
    background: ${({ theme }) => theme.colors.background};
  }
`