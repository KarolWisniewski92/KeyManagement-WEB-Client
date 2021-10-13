import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  html, body, #root, .App {
    height: 100%;
  }

  #root {
    display:flex;
    flex-flow: column wrap;
  }
  
`