import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
  box-sizing:border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-family: 'Lato', sans-serif;
  }
  
  html, body, #root, .App {
    box-sizing:border-box;
  }

  html, body, .App {
    height: 100%;
  }
  
  #root {
    height:100vh;
  }
  
`