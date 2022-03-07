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

const handleLoginStatusMainWrapper = (loginStatus, size) => {
  console.log(size)
  switch (loginStatus) {
    case "logged":
      return size === "M" ? "center" : "space-between";
    case "noLogged":
      return "center";
    default:
      return "center";
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
justify-content:${({ loginStatus }) => handleLoginStatusMainWrapper(loginStatus, "M")};
align-items:center;
flex-wrap:wrap;
position:relative;

@media (min-width: 768px) {
  justify-content:${({ loginStatus }) => handleLoginStatusMainWrapper(loginStatus, "S")};

  }


`

export const NavigationMiniWrapper = styled.div `
--name: "NavigationMiniWrapper";
display:flex;
flex-direction: row;
justify-content:${({ loginStatus }) => handleLoginStatus(loginStatus)};
align-items: center;

`

export const NavigationWelcomeText = styled.div `
--name: "NavigationWelcomeText";
position:relative;
text-align:center;
font-size: 17px;
display:flex;
color: white;
margin-right:15px;

@media (min-width: 768px) {
  font-size: 20px;

  }
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

export const ButtonBox = styled.div `
--name: "ButtonBox";
display:flex;
margin-bottom:10px;
flex-direction:column;
justify-content:center;
align-items:center;

@media (min-width: 768px) {
  flex-direction:row;
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
margin-bottom: 10px;

:hover{
  background-color: #ffbc00
}

@media (min-width: 768px) {
  margin-bottom: 0px;
  }



`

export const SetsBox = styled.div `
--name:"SetsBox";
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-bottom:20px;
position:relative;

:last-child{
  margin-right: 0px;
}

@media (min-width: 768px) {
    margin-bottom: 0px;
  };

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

:last-child{
  margin-right:0px;
}

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