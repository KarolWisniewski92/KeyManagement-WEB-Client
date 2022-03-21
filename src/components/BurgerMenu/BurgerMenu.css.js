import styled from "styled-components";

export const BurgerMenuMain = styled.div `
min-width: 200px;
position:relative;

@media (max-width: 768px) {
    margin-bottom:15px;
  };
`

export const BurgerMenuHeder = styled.div `
background-color: #f05c5c;
padding:5px;
display:flex;
justify-content:center;
align-items:center;
text-transform:uppercase;
border-bottom: 1px solid black;
cursor: pointer;
`

export const BurgerMenuBody = styled.div `
z-index:10;
width:100%;
position:absolute;
display:flex;
transform:scaleY(${({showMenu})=>showMenu?1:0});
transform-origin:top;
flex-direction: column;
transition:0.5s;
`

export const MenuButton = styled.button `
border:none;
padding:7px 5px;
background:#dcdcdc;
border-bottom:1px solid #333;
cursor: pointer;
transition: 0.3s;
:hover{
    transform:scale(1.02);
    background:#c8c7c7;
}

`