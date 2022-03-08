import styled from "styled-components";

export const DashboardBody = styled.div `
--name:"DashboardBody";
display:flex;
flex-direction:row;
align-items:flex-start;
width:100%;

@media (max-width: 768px) {

    flex-direction:column-reverse;
    align-items:center;

  }
`