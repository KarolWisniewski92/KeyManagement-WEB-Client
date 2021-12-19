import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
  box-sizing:border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  html, body, #root, .App {
    height: 100%;
    box-sizing:border-box;
  }
  

  #root {
    display:flex;
    flex-flow: column wrap;
  }
  
`