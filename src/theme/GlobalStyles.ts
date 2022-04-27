import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
  
    font-family: 'Lato';
    color: ${({ theme }) => theme.color.color2};
    text-decoration: none;;
  }

  div, #root {
    display: flex;
    height: 100%;
  }
`
