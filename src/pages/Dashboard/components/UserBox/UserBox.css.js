import styled from "styled-components"

export const UserBoxWrapper = styled.div `
--name:"UserBoxWrapper";
width:100%;
min-width:250px;
display:flex;
flex-direction: column;
flex-wrap: wrap;

@media (min-width: 768px) {
    width:30%;
  }

@media (min-width: 1920px) {
    width:20%;
  }

`

export const UserBoxBody = styled.div `
--name:"UserBoxBody";
padding:10px;
`

export const MyKeysListBox = styled.div `
--name: "MyKeysListBox";
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items: stretch;
`