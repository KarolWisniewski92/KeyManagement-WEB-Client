import styled from "styled-components";

export const LoginForm_H1 = styled.h1`
text-align:center;
color: white;
`

export const Input = styled.input`
width: ${({ type }) => type === 'checkbox' ? 'auto' : '300px'};
margin-right: ${({ type }) => type === 'checkbox' ? '10px' : '0'};
padding: 10px;
margin-bottom: 15px;
border-radius: ${(props) => { console.log(props) }};
border:none;
box-shadow: 0px 0px 5px #5f5f5f;
`

export const LoginBox = styled.div`
padding:30px;

background-color: #1f96c5;
border-radius: 25px;
box-shadow: 0px 10px 20px -5px #5f5f5f;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`