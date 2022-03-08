import styled from "styled-components";

export const LoginBox = styled.div `
--name: "LoginBox";
position:relative;
width:20%;
background-color: #1f96c5;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);

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

export const ButtonBox = styled.div `
--name:"ButtonBox";
height:50px;
width:100%;
bottom:-50px;
transform-origin:top;
display:flex;

`
export const Button = styled.button `
--name:"Button";
flex-grow:1;
border:none;
background:${({theme})=>(theme.colors.blue.dark)};
color:white;
border-right:1px solid ${({theme})=>(theme.colors.blue.light)};
cursor: pointer;
transition: 0.5s;
:last-child{
  border-right:none;
}
:hover{
  background-color:#ffbc00;
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

export const FormWrapper = styled.div `
width:100%;
padding:20px;
`

export const ErrorBox = styled.div `
--name:"ErrorBox";
background: white;
padding: 5px;
margin:10px 0px;
`
export const ValidationErrorSpan = styled.span `
--name: "ValidationErrorSpan";
display:block;
margin-bottom:5px;
`