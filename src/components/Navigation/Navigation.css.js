import styled from "styled-components"

const handleSet = (set, theme) => {
  switch (set) {
    case "KP":
      return theme.templateColors.blue;
    case "NOC":
      return theme.templateColors.green;
    case "DUS":
      return theme.templateColors.yellow;
    default:
      return theme.templateColors.blue;
  }

}

const handleLoginStatus = (loginStatus) => {
  switch (loginStatus) {
    case "logged":
      return "flex-end";
    case "noLogged":
      return "center";
    default:
      return "flex-end";
  }
}

export const NavigationWrapper = styled.div `
--name: "NavigationWrapper";
min-height:80px;
background-color: #333;
display:flex;
flex-flow: row wrap;
padding:20px;
justify-content:center;
`

export const NavigationMainWrapper = styled.div `
--name: "NavigationMainWrapper";
width: 80%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
position:relative;
`

export const NavigationMiniWrapper = styled.div `
--name: "NavigationMiniWrapper";
flex:1;
display:flex;
flex-direction: row;
justify-content:${({ loginStatus }) => handleLoginStatus(loginStatus)};
align-items: center;

`

export const NavigationWelcomeText = styled.div `
--name: "NavigationWelcomeText";
position:relative;
font-size: 20px;
display:flex;
color: white;
padding: 0 20px;
`

export const ButtonLogout = styled.button `
--name: "ButtonLogout";
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

export const NavigationLoginButton = styled.button `
--name: "NavigationLoginButton";
padding:7px 25px;
margin-right:20px;
background-color: yellow;
border:none;
cursor: pointer;
transition:0.5s;
:hover{
  background-color: #ffbc00
}

`

export const SetsBox = styled.div `
--name:"SetsBox";
flex:1;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-bottom:10px;
position:relative;

@media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom:0px;

  }

`

export const SetButton = styled.button `
--name: "SetButton";
position:relative;
padding: 10px 20px;
border: none;
margin-right:15px;
background: #255ed8;
color:white;
transition: background 0.5s;
cursor: pointer;

:hover{
  background: #1c4397
}
::after{
  position:absolute;
  bottom:-5px;
  right:-5px;
  border-radius:25%;
  content:"";
  width:15px;
  height:15px;
  background: ${({ set, theme }) => handleSet(set, theme)};
}
`