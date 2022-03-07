import styled from "styled-components";

export const LoginBox = styled.div `
--name: "LoginBox";
padding:15px;
width:20%;
background-color: #1f96c5;
border-radius: 25px;
box-shadow: 0px 10px 20px -5px #5f5f5f;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

@media (max-width: 1920px) {
    width:25%;

  }

@media (max-width: 1200px) {
    width:50%;

  }

@media (max-width: 768px) {
    width:90%;

  }


`



export const InputContainer = styled.div `
--name:"InputContainer";
width:100%;
`

export const Form100 = styled.form `
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ErrorBox = styled.div `
--name:"ErrorBox";
background: white;
padding: 5px;
margin:10px 0px;
border-radius:5px;
`
export const ValidationErrorSpan = styled.span `
--name: "ValidationErrorSpan";
display:block;
margin-bottom:5px;
`