import styled from "styled-components";

export const DashboardBody = styled.div `
--name:"DashboardBody";
display:flex;
flex-direction:row;
align-items:flex-start;
width:80%;

@media (max-width: 768px) {

    flex-direction:column-reverse;
    align-items:center;

  }
`

export const DashboardWrapper = styled.div `
--name:"DashboardWrapper";
width:100%;
display:flex;
justify-content:center;
align-items:center;
`