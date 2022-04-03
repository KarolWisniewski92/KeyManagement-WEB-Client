import styled from "styled-components";

export const RegisterBox = styled.div `
--name:"RegisterBox";
width:20%;
background-color: #1f96c5;
box-shadow: 0px 10px 20px -5px #5f5f5f;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin:20px 0px;

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
export const FormWrapper = styled.div `
--name:"FormWrapper";
width:100%;
padding:20px;
`

export const Form100 = styled.form `
--name:"Form100";
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
export const ValidationErrorSpan = styled.span `
--name: "ValidationErrorSpan";
display:block;
margin-bottom:5px;
`