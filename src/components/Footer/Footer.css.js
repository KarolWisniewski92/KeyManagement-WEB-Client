import styled from "styled-components";

export const FooterBody = styled.div `
--name:"FooterBody";
width:100%;
background:#333;
display:flex;
justify-content: center;
align-items: center;
`

export const MailLink = styled.a `
--name:"MailLink";
text-decoration: none;
color: white;
transition:color 0.5s;
:hover{
    color:#949494;
}
`