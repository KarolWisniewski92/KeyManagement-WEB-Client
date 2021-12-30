import styled from "styled-components"

export const NavigationWrapper = styled.div`
background-color: #333;
display:flex;
flex-flow: row wrap;
padding:20px;
justify-content:space-between;
`

export const NavigationMiniWrapper = styled.div`
flex:1;
display:flex;
flex-direction: row;
justify-content:center;
align-items: center;

`

export const NavigationWelcomeText = styled.div`
font-size: 20px;
display:flex;
color: white;
padding: 0 20px;
`

export const ButtonLogout = styled.button`
color: white;
background-color: orange;
cursor: pointer;
border: none;
transition:0.5s;
padding:10px;
:hover{
    background-color: #b64b04
}

`

export const SetsBox = styled.div`
flex:1;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-bottom:10px;

@media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom:0px;

  }

`