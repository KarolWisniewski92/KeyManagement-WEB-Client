import styled from "styled-components";

export const FooterBody = styled.div `
width:100%;
height:60px;
background:#333;

display:flex;
justify-content: center;
align-items: center;
`

export const MailLink = styled.a `
text-decoration: none;
color: white;
transition:color 0.5s;
:hover{
    color:#949494;
}
`