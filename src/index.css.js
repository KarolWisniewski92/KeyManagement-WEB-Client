import {
  createGlobalStyle
} from 'styled-components'
import {
  normalize
} from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
  box-sizing:border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-family: 'Lato', sans-serif;
  }
  html{
    height:100vh;
  }
  
  html, body, #root, .App {
    box-sizing:border-box;
    margin: 0;
    padding:0;
  }
  body, .App {
    height: 100%;
  }
  
  #root {
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;

  }
  
`