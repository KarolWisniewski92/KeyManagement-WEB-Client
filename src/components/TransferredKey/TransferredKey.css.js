import styled from "styled-components";

export const TransferredKeyBox = styled.div `
display:flex;
flex-direction:column;
margin:10px;
padding:10px;
margin-bottom:20px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
background: pink;
transition-property: transform, box-shadow;
transition-duration:0.6s;

&:hover{
    transform: scale(1.05)
}
`

export const FlexWrapper = styled.div `
display:flex;
justify-content:center;
align-items:center;
`