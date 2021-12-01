import styled from "styled-components"

export const NavigationWrapper = styled.div`
background-color: #333;
display:flex;
flex-flow: row wrap;
padding:20px;
justify-content:space-between;
`

export const NavigationMiniWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items: center;

`

export const NavigationWelcomeText = styled.div`
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